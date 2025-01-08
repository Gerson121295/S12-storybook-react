import { Meta, StoryObj } from '@storybook/react';
import { MyLabel, type Props  } from '../components/MyLabel';


const meta:Meta<Props> = {
    title: 'UI/labels/MyLabel',  //'Example/MyLabel', //ruta a almacenar el MyLabel
    component: MyLabel,
    tags: ['autodocs'],
    parameters:{ //paarametros para centrar el label
        layout: 'centered'
    },
    argTypes:{ //define el tipo control para los propiedades
        size:{control: 'select'}, //'inline-radio' 
        fontColor: {control: 'color'},
    }
    }satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta> //define el tipo de story

//Creacion de Stories
export const Basic: Story = { //exporta y crea la story
    args:{ //define el valor del label de MyLabel.tsx
        label: 'Basic label',
    }
};

export const AllCaps: Story = { //exporta y crea la story
    args:{ //define el valor del label de MyLabel.tsx
        label: 'AllCaps',
        allCaps:true,
    }
};

export const SecondaryL: Story = { //exporta y crea la story
    args:{ //define el valor del label de MyLabel.tsx
        label: 'SecondaryL',
        color: 'text-secondary'
    }
};

export const CustomColor: Story = { //exporta y crea la story
    args:{ //define el valor del label de MyLabel.tsx
        label: 'CustomColor',
        fontColor:'#5517ac',
    }
};

export const CustomBackgroundColor: Story = { //exporta y crea la story
        args:{ //define el valor del label de MyLabel.tsx
            label: 'CustomColor',
            fontColor:'#eeeeee',
            backgroundColor: '#000000#000000'
        }
};