import omdLogo from '../../assets/omdLogo.png';
import NavigationButton from "../NavigationButton/NavigationButton.jsx";
import MenuIcon from '../Icons/MenuIcon/MenuIcon.jsx';
import headerStyles from './header.module.css';
import React, {useState} from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import TwitterIcon from '../Icons/TwitterIcon/TwitterIcon';
import DiscordIcon from '../Icons/DiscordIcon/DiscordIcon';
import Link from 'next/link';

const Header = () => {
    
    const [modalOpen, setModalOpen] = useState(false);
    const router = useRouter();



    return (
        <div id={headerStyles.header} >
            <div className={headerStyles['desktopheader-wrapper']} >
                <NavigationButton innerText="THE TEAM" givenLink="/team" enabled={true} activeRoute={router.pathname} />
                <NavigationButton innerText="TOKENOMICS" givenLink="/tokenomics" enabled={true} activeRoute={router.pathname} />

                <Link href="/" >
                    <a>
                        <Image src={omdLogo} alt="Logo" height="90" width="100" style={{cursor:"pointer"}} />
                    </a>
                </Link>
                <NavigationButton innerText="TRAIT MARKET" givenLink="/trait_market" enabled={true} activeRoute={router.pathname} />
                <NavigationButton innerText="DEERSHOP" givenLink="/deer_shop" enabled={false} activeRoute={router.pathname} />
            </div>
            <div className={headerStyles['mobileheader-wrapper']} >
                <Link href="/"  >
                    <a style={{zIndex:3}}>
                        <Image src={omdLogo} alt="Logo" height="90" width="100" style={{cursor:"pointer"}} />
                    </a>
                </Link>
                <div onClick={()=>{setModalOpen(!modalOpen)}} style={{zIndex:3}} >
                    <MenuIcon />
                </div>
                {
                    modalOpen ?
                    <div style={{position:"absolute", top:90, left:0, zIndex:3, boxSizing:"border-box", width:"100%", height:250, 
                        display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center"
                        }} >
                        <NavigationButton innerText="THE TEAM" givenLink="/team" enabled={true} activeRoute={router.pathname} />                    
                        <NavigationButton innerText="TOKENOMICS" givenLink="/tokenomics" enabled={true} activeRoute={router.pathname} />
                        <NavigationButton innerText="TRAIT MARKET" givenLink="/trait_market" enabled={true} activeRoute={router.pathname} />
                        <NavigationButton innerText="DEERSHOP" givenLink="/deer_shop" enabled={false} activeRoute={router.pathname} />
                        <div style={{marginTop: 20, display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"center", width:140}} >
                            <Link href="https://twitter.com/AptosDeers_NFT" target="_blank" >
                                <a>
                                    <TwitterIcon width="35" height="35" />
                                </a>
                            </Link>
                            <Link href="https://discord.gg/aptosdeers" target="_blank">
                                <a>
                                    <DiscordIcon width="35" height="35" />
                                </a>        
                            </Link>
                        </div>
                    </div>
                    :
                    null
                }
                {
                    modalOpen ?
                    <div style={{position:"absolute", zIndex:2, top:0, left:0, backgroundColor:"black", opacity:0.4, width:"100%", height:360}} >

                    </div>
                    :
                    null
                }
            </div>
        </div>
        
    )
}

export default Header;