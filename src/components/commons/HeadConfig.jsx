import React from 'react'

const HeadConfig = () => {
    return (
        <>
            <meta charSet="utf-8" />
            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
            <title>Confirmación de Reserva</title>
            <link href="https://fonts.googleapis.com" rel="preconnect" />
            <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
            <link
                href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
                rel="stylesheet"
            />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n    "
                }}
            />
        </>
    )
}

export default HeadConfig
