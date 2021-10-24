'use strict'

const puppeteer = require('puppeteer')
const path = require('path')

const fs = require('fs')

const OG_SOURCE_DIR_PATH = path.join(__dirname, '..', 'data')
const OG_SOURCE_HTML_FILE_PATH = path.join(OG_SOURCE_DIR_PATH, 'og.html')
const OG_DIR_PATH = path.join(__dirname, '..', 'public', 'og')

async function captureOgImage(browser: any, title: string, description: string, imagePath: string) {
  const page = await browser.newPage()
  await page.setViewport({
    width: 1200,
    height: 630,
  })
  await page.goto('file://' + OG_SOURCE_HTML_FILE_PATH)
  await page.exposeFunction('getTitle', () => title)
  await page.exposeFunction('getDescription', () => description)
  await page.reload()
  await page.screenshot({
    path: imagePath,
    type: 'jpeg',
  })
  await page.close()
}

;(async function () {
  if (!fs.existsSync(OG_DIR_PATH)) {
    fs.mkdir('public/og', (err: unknown) => {
      if (err) {
        throw err
      }
    })
  }

  const ogList = [{ title: 'Yuma Kitamura', description: 'Web Developer', slug: 'yuma-kitamura' }]

  const browser = await puppeteer.launch()

  for (const { title, description, slug } of ogList) {
    const OG_IMAGE_FILE_PATH = `${OG_DIR_PATH}/` + slug + '.jpg'
    await captureOgImage(browser, title, description, OG_IMAGE_FILE_PATH)
  }

  await browser.close()
})()
