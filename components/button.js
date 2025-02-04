
"use client";

import {forwardRef} from "react";
import Link from "next/link";

const Button = forwardRef(function Button(props, ref) {
	const {id, className, href, disabled, type, children, title, onClick} = props;
    const renderedClassName = `button pxglow${className ? " " + className : ""}`;

	if ((disabled && href) || (!href && !type && !onClick)) {
		return (
			<span
				ref={ref}
				id={id}
				className={renderedClassName}
				title={title}
			>
				{children}
			</span>
		);
	} else if ((typeof href === "object") || href?.startsWith("/") || href?.startsWith("?") || href?.startsWith("#")) {
		return (
			<Link
				ref={ref}
				href={href}
				id={id}
				className={renderedClassName}
				onClick={onClick}
				title={title}
			>
				{children}
			</Link>
		);
	} else if (href) {
		return (
			<a
				ref={ref}
				id={id}
				className={renderedClassName}
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				onClick={onClick}
				title={title}
			>
				{children}
			</a>
		);
	} else {
		return (
			<button
				ref={ref}
				id={id}
				className={renderedClassName}
				type={type || "button"}
				disabled={disabled}
				onClick={onClick}
				title={title}
			>
				{children}
			</button>
		);
	}
});

export default Button;
