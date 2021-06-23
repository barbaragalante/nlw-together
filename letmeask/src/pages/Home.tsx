import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import '../styles/auth.scss'
import { Button } from '../components/Button';


export function Home(){
    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="ilustração simbolozando perguntas e respostas"/>
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>tire as dúvidas da sua audiência</p>
            </aside>
            <main>
                <div className="main-content" >
                <img src={logoImg} alt="letmeask"/>
                <button className="create-room">
                <img src={googleIconImg} alt="logo do google"/>
                    Crie sua sala com o google
                </button>
                <div className="saparator"> ou entre em uma sala</div>
                <form>
                    <input 
                    type="text"
                    placeholder="Digite o código da sala"
                    />
                    <Button type="submit">
                        entrar na sala
                    </Button>
                </form>
                </div>
            </main>
        </div>
    )
}
