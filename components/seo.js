import Head from "next/head";

export default function SEO({
    title,
    description,
    image
}) {
    return (
        <Head>
            <title>{title}</title>
            <meta key="og:title" property="og:title" content={title} />
            <meta key="twitter:title" name="twitter:title" content={title} />

            {description && (
                <>
                    <meta key="description" name="description" content={description} />
                    <meta key="og:description" property="og:description" content={description} />
                    <meta key="twitter:description" name="twitter:description" content={description} />
                </>
            )}

            {image && (
                <>
                    <meta key="og:image" property="og:image" content={image} />
                    <meta key="twitter:image" name="twitter:image" content={image} />
                </>
            )}
        </Head>
    )
}