import React, { FC } from 'react'
import { useIntl } from 'gatsby-plugin-react-intl'

type ProductProps = {
  data: Array<{
    node: {
      id: string
      title: string
      description: string
      skills: string[]
      image: string
      url: string
    }
  }>
}

const Product: FC<ProductProps> = ({ data }) => {
  const intl = useIntl()

  return (
    <div className="section">
      <h1>{intl.formatMessage({ id: 'product' })}</h1>
      {data.map(({ node }: any) => {
        return (
          <div key={node.id}>
            <h2>{intl.formatMessage({ id: node.title })}</h2>
            {node.image && <img src={node.image} alt={node.title} decoding="async" />}
            <p
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({
                  id: node.description,
                }),
              }}
            />
            <h3>
              {intl.formatMessage({
                id: 'product_technology_used',
              })}
            </h3>
            <ul>
              {node.skills.map((skill: string) => {
                return <li key={skill}>{skill}</li>
              })}
            </ul>
            {node.url && (
              <>
                <h3>
                  {intl.formatMessage({
                    id: 'product_url',
                  })}
                </h3>
                <p>
                  <a href={node.url} target="_blank" rel="noopener noreferrer">
                    {node.url}
                  </a>
                </p>
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Product
