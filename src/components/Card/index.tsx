import React, { FC, Fragment } from 'react'
import * as SC from './index.module.scss'
import { SiteMetadataTypes } from '../../types'
import { NekoButton } from 'nekohack-ui'
import PaperPlaneSvg from '../../static/icons/paper-plane.svg'

export const Card: FC<any> = ({ data }: SiteMetadataTypes) => {
    const positionList: string[] = data.position.split(',')

    return (
        <Fragment>
            <div className={SC.content}>
                <div className={SC.info}>
                    <div className={SC.me} />
                    <h1 className={SC.name}>{data.author}</h1>
                    <div className={SC.position}>
                        <ul>
                            {positionList.map((p: string) => {
                                return <li key={p}>{p}</li>
                            })}
                        </ul>
                    </div>
                    <p className={SC.location}>
                        {`普段 ${data.lonlat} 近辺に居ます`}
                    </p>
                    <p className={SC.description}>{data.description}</p>
                    <p>
                        <NekoButton
                            onClick={() => {
                                const url = 'https://webneko.dev/contact'
                                window.open(url, '_blank')
                            }}
                        >
                            Contact In Touch
                            <PaperPlaneSvg
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    marginLeft: '4px',
                                }}
                            />
                        </NekoButton>
                    </p>
                </div>
            </div>
        </Fragment>
    )
}