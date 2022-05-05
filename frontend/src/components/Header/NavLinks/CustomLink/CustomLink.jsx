import React from 'react';
import { Link, useRoute } from 'wouter';
import './CustomLink.css'

export default function CustomLink(props) {
    const to = encodeURI(props.to)
    const [isActive] = useRoute(to)

    return (
        <Link {...props}>
            <a href='replace' style={props.style} className={`${props.className} ${isActive ? "active-link" : ""}`} > <span >{props.children}</span></a>
        </Link>
    )
}
