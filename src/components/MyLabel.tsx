import './MyLabel.css';

//interface establece los valores de estilos definidos en MyLabel.css
interface Props {

    /**
     * Text to display
     */

    label: string;

    /**
     * Label size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';

    /**
     * Capitalize all letters
     */
    allCaps?: boolean,

    /**
     * Label Color
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary',
    /**
     * Font Color
     */
    fontColor?: string,

}


/**
 * !TOdas son opcionales
 * allCaps: boolean,
 * color: 'text-primary' | 'text-secondary' | 'text-tertiary',
 * fontColor?: string, texto del span
 */

export const MyLabel = ({
    label,
    size= 'normal',
    allCaps = false,
    color,
    fontColor, // = '#ddd', // = '',

}:Props) => { //desestructura las props que recibe y son de tipo Props
  return (
    <span className={ `${size} ${color} label` } style={{ color: fontColor }}> 
        {allCaps ? label.toUpperCase() : label } 
    </span>
  )
}



