import { forwardRef, ForwardRefRenderFunction } from 'react';
import * as S from './styles';

import SlickSlider, { Settings } from "react-slick";

export type SliderSettings = Settings;

export type SliderProps = {
  children: React.ReactNode;
  settings: SliderSettings;
};

const Slider: ForwardRefRenderFunction<SlickSlider, SliderProps> = ({ children, settings }, ref) => {
  return (
    <S.Wrapper>
      <SlickSlider ref={ref} {...settings} >
        {children}
      </SlickSlider>
    </S.Wrapper>
  );
}

export default forwardRef(Slider);
