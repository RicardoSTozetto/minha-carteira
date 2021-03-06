import React, { useMemo } from 'react'



import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'
import {Container, Content, Filters} from './style'

interface IRouteParams {
    match: {
        params: {
            type: string;
        }
    }
}


const List: React.FC<IRouteParams> = ({ match }) => {

    const {type} = match.params;
    const title = useMemo(() => {
        return type === 'entry-balance' ? 
        {
            text : 'Entradas',
            lineColor:'#F7931B'
        } : 
        {
            text: 'Saídas',
            lineColor: '#E44C4E'
        }
    },[type]);

    const months = [
        {value: 7, label: 'Julho'},
        {value: 8, label: 'Agosto'},
        {value: 9, label: 'Setembro'}
    ];

    const years = [
        {value: 2018, label: 2018},
        {value: 2019, label: 2019},
        {value: 2020, label: 2020}
    ];

    return(
        <Container>
             <ContentHeader title={title.text} lineColor={title.lineColor}>
                <SelectInput options={months}/>
                <SelectInput options={years}/>
            </ContentHeader>

            <Filters>
                <button 
                type="button"
                className="tag-filter tag-filter-recurrent">
                    Recorrentes
                </button>

                <button 
                type="button"
                className="tag-filter tag-filter-eventual">
                    Eventuais
                </button>
            </Filters>

            <Content>
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="29/05/2021"
                    amount="R$ 20,00"                
                />
                
            </Content>
        </Container>
    );
}

export default List;