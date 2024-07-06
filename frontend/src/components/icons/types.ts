import { MotionProps } from 'framer-motion'

export class IconProps {
  /**
   * Root SVG element className
   */
  className?: string

  /**
   * Root SVG element fill
   * @default 'currentColor'
   */
  fill?: string

  /**
   * Root SVG element stroke
   * @default 'currentColor'
   */
  stroke?: string

  /**
   * Root SVG element props for animating with "framer-motion"
   */
  motion?: MotionProps
}

export const DEFAULT_ICON_PROPS: IconProps = {
  stroke: 'currentColor',
  fill: 'currentColor',
}
