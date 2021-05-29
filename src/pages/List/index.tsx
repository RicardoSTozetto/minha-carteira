import React from 'react'


import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import {Container} from './style'

const List: React.FC = () => {

    const options = [
        {value: 'Rodrigo', label: 'Rodrigo'},
        {value: 'Maria', label: 'Maria'},
        {value: 'Ana', label: 'Ana'}
    ];

    return(
        <Container>
             <ContentHeader title="Entradas" lineColor="#fff">
                <SelectInput options={options}/>
            </ContentHeader>
        </Container>
    );
}

export default List;