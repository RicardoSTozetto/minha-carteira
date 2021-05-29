import React from 'react'



import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'
import HistoryFinanceCard from '../../components/HistoryFinanceCard'
import {Container, Content} from './style'

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

            <Content>
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="29/05/2021"
                    amount="R$ 20,00"                
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="29/05/2021"
                    amount="R$ 20,00"                
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="29/05/2021"
                    amount="R$ 20,00"                
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="29/05/2021"
                    amount="R$ 20,00"                
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="29/05/2021"
                    amount="R$ 20,00"                
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="29/05/2021"
                    amount="R$ 20,00"                
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="29/05/2021"
                    amount="R$ 20,00"                
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="29/05/2021"
                    amount="R$ 20,00"                
                />
                <HistoryFinanceCard
                    cardColor="#313862"
                    tagColor="#E44C4E"
                    title="Conta de luz"
                    subtitle="29/05/2021"
                    amount="R$ 20,00"                
                />
                <HistoryFinanceCard
                    cardColor="#313862"
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