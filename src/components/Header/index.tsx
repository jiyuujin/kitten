import React, { FC } from 'react'
import TextLoop from 'react-text-loop'
import * as SC from './index.module.scss'
import { positions } from '../../utils/profile'

type HeaderProps = {
    data: GatsbyTypes.Maybe<
        Pick<
            GatsbyTypes.SiteSiteMetadata,
            | 'title'
            | 'description'
            | 'biography'
            | 'position'
            | 'workExperience'
            | 'author'
            | 'locale'
            | 'lonlat'
            | 'siteUrl'
            | 'image'
            | 'blogName'
        >
    >
}

const Header: FC<HeaderProps> = ({ data }) => {
    return (
        <div className={SC.title}>
            <TextLoop interval={5000}>
                {positions.map((position: string) => (
                    <div key={position}>{position}</div>
                ))}
            </TextLoop>
            <div className={SC.name}>{data?.author}</div>
            <div className={SC.locale}>{data?.locale}</div>
        </div>
    )
}

export default Header
