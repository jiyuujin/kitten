import React, { FC } from 'react'
import { Button as NekoButton } from 'nekohack-ui'
import * as SC from './index.module.scss'
import { getCookie, setCookie } from '../../services/cookie'

export const CookieFooter: FC = () => {
    const accept = () => {
        const isAccepted: boolean = true
        setCookie(isAccepted)
    }

    return (
        <>
            {!getCookie() ? (
                <footer className={SC.cookieFooter}>
                    <div className={SC.content}>
                        <div className={SC.title}>
                            あなたがこのサイト上でベストな体験ができるようCookieを使用しています
                        </div>
                        <a
                            href="https://nekohack-privacy-policy.netlify.app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            プライバシーポリシー
                        </a>
                        <NekoButton onClick={accept}>確認しました</NekoButton>
                    </div>
                </footer>
            ) : null}
        </>
    )
}
