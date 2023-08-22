import { ImageSourcePropType } from "react-native"

export interface SlideProps {
    id: number,
    image: ImageSourcePropType
    title: string,
    description: string,
    icon: ImageSourcePropType
  }