import React from 'react';

export default function Title(props: { title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) {
    return <h1>{props.title}</h1>
}