/* eslint-disable jsx-a11y/alt-text, @next/next/no-img-element, @next/next/no-sync-scripts */
import { useRouter } from "next/router"
import Script from "next/script"
import { GoogleAnalytics } from "nextjs-google-analytics";
import { useCallback, useEffect, useMemo } from "react";

export default function TrackingCodes() {

    const router = useRouter();

    const metaPixelIDs = useMemo(() => [
        // Live Nation US
        // '336617377178130',
        // Live Nation Canada
        // '386920928936604',
    ], []);

    const programmaticPixelIDs = useMemo(() => ({
        // TTD Programmatic US
        'wed77s2': ['q684oyg'],
        // TTD Programmatic Canada
        'w905znw': ['x5bdt2r'],
    }), []);

    const handleRouteChange = useCallback(() => {
        // Send tracking for Meta pixels.
        if (typeof window.fbq === 'function') {
            window.fbq('track', 'PageView');
            window.fbq('track', 'ViewContent');
            console.info('Meta pixels: Route changed - Tracked');
        } else {
            console.warn('Could not fire Meta pixel tracking: `window.fbq` is not a function')
        }

        // Init programmatic pixels.
        if (typeof window.TTDUniversalPixelApi === 'function') {
            var universalPixelApi = new window.TTDUniversalPixelApi();
            Object.entries(programmaticPixelIDs).forEach(([id, properties]) => {
                universalPixelApi.init(id, properties, 'https://insight.adsrvr.org/track/up');
            });
            console.info('TTD Programmatic pixels: Route changed - Tracked');
        } else {
            console.warn('Could not init TTD pixel: \`TTDUniversalPixelApi\` is not a function');
        }
    }, [programmaticPixelIDs]);

    useEffect(() => {
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
          router.events.off('routeChangeComplete', handleRouteChange)
        }
      }, [router, handleRouteChange])

    return (
        <>
            <GoogleAnalytics trackPageViews debugMode={true} />

            {/* Meta Pixels */}
            {(metaPixelIDs.length > 0) && (
                <Script id="ln-meta-pixels" dangerouslySetInnerHTML={{ __html: `
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    // Init properties
                    ${metaPixelIDs.map(id => `window.fbq('init', '${id}');`).join('\n')}
                    // Run initial tracks
                    window.fbq('track', 'PageView');
                    window.fbq('track', 'ViewContent');
                    console.info('Meta pixels: Initial load - Tracked');
                `}} />
            )}

            {/* The Trade Desk Universal Programmatic Pixels */}
            <Script id="ttd-prog-pixels" dangerouslySetInnerHTML={{ __html: `
                if (typeof ttd_dom_ready === 'function') {
                    ttd_dom_ready( function() {
                        if (typeof TTDUniversalPixelApi === 'function') {
                            var universalPixelApi = new TTDUniversalPixelApi();
                            // Init properties
                            ${Object.entries(programmaticPixelIDs).map(([id, properties]) => `universalPixelApi.init('${id}', ['${properties.join(',')}'], 'https://insight.adsrvr.org/track/up');`).join('\n')}
                            console.info('TTD Programmatic pixels: Initial load - Tracked');
                        } else {
                            console.warn('Could not init TTD pixel: \`TTDUniversalPixelApi\` is not a function');
                        }
                    });
                } else {
                    console.warn('Could not init TTD pixel: \`ttd_dom_ready\` is not a function');
                }
            `}} />
            
            {/* Meta Pixel Noscripts */}
            {metaPixelIDs.map(id => (
                <noscript id={`ln-meta-pixel-noscript-${id}`} key={`ln-meta-pixel-noscript-${id}`}>
                    <img height="1" width="1" style={{ display: 'none' }} src={`https://www.facebook.com/tr?id=${id}&ev=PageView&noscript=1`} />
                </noscript>
            ))}
        </>
    )
}