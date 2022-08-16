import components from './HeaderComponents';
import { FC } from 'react';

export const Header: FC = () => {

   return (
        <components.Header>
            <components.Wrapper>
                <components.Link href="https://onlydigital.ru/">
                    ONLY.
                </components.Link>
            </components.Wrapper>
        </components.Header>  
   );
}