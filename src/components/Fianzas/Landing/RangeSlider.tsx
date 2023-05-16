import './css/RangeSlider.css';

interface RangeSliderProps {
    min: number;
    max: number;
    value: number;
    step: number;
    onUpdateHandler: any;
}

export const RangeSlider: React.FC<RangeSliderProps> = ( {min,max, step, value, onUpdateHandler}) => {

    return (
      
          <input
            type='range'
            className='range-slider'
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={onUpdateHandler}
          ></input>
      
    )
  }
  