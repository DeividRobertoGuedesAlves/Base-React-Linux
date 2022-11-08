import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Routes as Rs, Route as R} from 'react-router-dom';
import { WhiteTheme as WT, DarkTheme as DT} from './components/Theme'

import { Input, PasswordInput as Password } from './components/inputs/';
import { Menu } from './components/Menu';

library.add(far, fas);

const App = () => {
  return (
    <>
      <Rs>
        <R path='/inputs' element={
          <WT>
            <div style={{
              width: '100vw',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '30px',
            }}>
              <Input type='text' name='username' id='username' placeholder='Usuário' borderRadius={true} top={true}/>
              <Input type='text' name='username' id='username' placeholder='Usuário' borderRadius={true} top={false} />
              <Input type='text' name='username' id='username' placeholder='Usuário' borderRadius={false} top={false} />
              <Password icon='lock' iconType='fas' name='password' id='password' placeholder='Senha' borderRadius={true} />
              <Password icon='lock' iconType='fas' name='password' id='password' placeholder='Senha' borderRadius={false} />
            </div>
          </WT>}/>
        <R path='/menu' element={<DT><Menu/></DT>} />
      </Rs>
    </>
  );
}

export default App;