import NextImage from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import { config } from "@/sanity/config";
import { styled } from '@/theme';

export const WrapperSelector = 'nextImage'

// it's pretty much impossible to style next/image at it's current state without adding a wrapper.
// see this: https://github.com/vercel/next.js/discussions/18312
// and follow this: https://github.com/vercel/next.js/discussions/29340
const InnerWrapper = styled('div', { 'img': { borderRadius: '$sm' } })

const Wrapper = ({ wrap, className, children }) => {
  if (wrap) {
    return <InnerWrapper className={`${WrapperSelector} ${className || ''}`}>{children}</InnerWrapper>
  }

  return children
}

const customImageBuilder = (imageUrlBuilder, options, fit = 'clip') => {
  const { originalImageDimensions, width, quality } = options || {}

  return imageUrlBuilder
    .width(width || Math.min(originalImageDimensions.width, 1920))
    .quality(quality || 75)
    .fit(fit)
}

const SanityImage = ({ src = {}, fit, layout, ...props }) => {
  const imageProps = useNextSanityImage(config, src, {
    imageBuilder: (imageUrlBuilder, options) => customImageBuilder(imageUrlBuilder, options, fit),
  })

  if (layout === 'fill') {
    delete imageProps.width
    delete imageProps.height
  }

  // eslint-disable-next-line no-param-reassign
  delete props.width
  // eslint-disable-next-line no-param-reassign
  delete props.height

  if (!imageProps) {
    return null
  }

  return <NextImage loader='custom' priority layout={layout} {...imageProps} {...props} />
}

/**
  @param {Object|string} src a Sanity image object or an url
*/
export const Image = ({ className, wrap = true, ...props }) => {
  let Img

  // locally imported images are an object with an src property
  if (typeof props.src === 'string' || props.src?.src) {
    Img = NextImage
  } else if (typeof props.src === 'object') {
    Img = SanityImage
  }

  return (
    <Wrapper className={className} wrap={wrap}>
      <Img {...props} />
    </Wrapper>
  )
}

export default Image
