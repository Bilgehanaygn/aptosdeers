import React, {useEffect, useState} from 'react';
import traitMarketStyles from './traitmarket.module.css';
import Image from 'next/future/image';
import { useWallet } from '@manahippo/aptos-wallet-adapter';
// import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
// import { useConnection, useWallet } from '@solana/wallet-adapter-react';
// import {Transaction } from '@solana/web3.js';
import axios from 'axios';

import spinnerLogo from '../../assets/trait_market/spinner-logo.png';

import Basketballer from '../../assets/trait_market/traits/outfit/Basketballer.png';
import Hoodie from '../../assets/trait_market/traits/outfit/Hoodie.png';
import Jacket from '../../assets/trait_market/traits/outfit/Jacket.png';
import Jailbreak from '../../assets/trait_market/traits/outfit/Jailbreak.png';
import NecklessSweat from '../../assets/trait_market/traits/outfit/NecklessSweat.png';
import Scarf from '../../assets/trait_market/traits/outfit/Scarf.png';
import Shirt from '../../assets/trait_market/traits/outfit/Shirt.png';
import Suit from '../../assets/trait_market/traits/outfit/Suit.png';
import Sweater from '../../assets/trait_market/traits/outfit/Sweater.png';
import Vest from '../../assets/trait_market/traits/outfit/Vest.png';
import NoOutfit from '../../assets/trait_market/traits/outfit/NoOutfit.png';

import HollyCap from '../../assets/trait_market/traits/cap/HollyCap.png';
import JustCap from '../../assets/trait_market/traits/cap/JustCap.png';
import Goolfy from '../../assets/trait_market/traits/cap/Goolfy.png';
import ElectricWire from '../../assets/trait_market/traits/cap/ElectricWire.png';
import Cloud from '../../assets/trait_market/traits/cap/Cloud.png';
import Bandage from '../../assets/trait_market/traits/cap/Bandage.png';
import SkellyHead from '../../assets/trait_market/traits/cap/SkellyHead.png';
import NoCap from '../../assets/trait_market/traits/cap/NoCap.png';

import LightningEffect from '../../assets/trait_market/traits/element/Lightning.png';
import AirEffect from '../../assets/trait_market/traits/element/Air.png';
import FireEffect from '../../assets/trait_market/traits/element/Fire.png';
import WaterEffect from '../../assets/trait_market/traits/element/Water.png';
import NoElement from '../../assets/trait_market/traits/element/NoElement.png';
import Link from 'next/link';
import BackArrowIcon from '../Icons/BackArrowIcon/BackArrowIcon';

const MarketItem = ({element, onClickCallback}) => {

    return (
        <div style={{fontWeight:500, cursor:"pointer"}} onClick={()=>{onClickCallback(element)}} >
            <Image src={element.image} alt="img" className={traitMarketStyles['market-trait-image']} />
            <div style={{marginLeft:5}} >
                {element.name}
            </div>
            <div style={{marginLeft:5}} >
                {
                    element.price === 0 ? '.' : element.price+' $ADT'
                }
                
            </div>
        </div>
    )
}



const TraitMarket = () => {
    const [deerNftsByOwner, setDeerNftsByOwner] = useState([]);
    const {wallets, connect, disconnect, connected} = useWallet();
    const [selectedDeerNft, setSelectedDeerNft] = useState(null);
    const [activeTrait, setActiveTrait] = useState('Outfits');
    const outfits = [
        {image: Basketballer, price:500, name: 'Basketballer'}, 
        {image: Hoodie, price:250, name: 'Hoodie' }, 
        {image: Jacket, price: 500, name: 'Jacket' }, 
        {image: Jailbreak, price: 300, name: 'Jailbreak' }, 
        {image: NecklessSweat, price: 500, name: 'NecklessSweat' }, 
        {image: Scarf, price: 700, name: 'Scarf' }, 
        {image: Shirt, price: 300, name:'Shirt'}, 
        {image: Suit, price: 400, name: 'Suit'},
        {image: Sweater, price: 400, name: 'Sweater'},
        {image: Vest, price: 400, name: 'Vest'},
        {image: NoOutfit, price: 400, name: 'NoOutfit'}
    ];
    const caps = [
        {image: Cloud, price: 100,name:'Cloud'}, 
        {image: ElectricWire, price: 100, name:'ElectricWire'}, 
        {image: Goolfy, price: 150, name: 'Goolfy'}, 
        {image: HollyCap, price: 250, name: 'HollyCap'}, 
        {image: JustCap, price: 250, name: 'JustCap'},
        {image: Bandage, price: 300, name: 'Bandage'},
        {image: SkellyHead, price: 500, name: 'SkellyHead'},
        {image: NoCap, price: 400, name: 'NoCap'}
    ];

    const elements = [
        {image: LightningEffect, price: 50, name:'Lightning'}, 
        {image: FireEffect, price: 50, name:'Fire'},
        {image: AirEffect, price: 50, name:'Air'} ,
        {image: WaterEffect, price: 50, name:'Water'},
        {image: NoElement, price: 50, name:'NoElement'}
    ];

    const [activeTraitImageList, setActiveTraitImageList] = useState(outfits);
    const [activeOutfit, setActiveOutfit] = useState(null);
    const [activeCap, setActiveCap] = useState(null);
    const [activeElement, setActiveElement] = useState(null);

    const [errorState, setErrorState] = useState({status: 0, message: 'Please connect your wallet to see your NFTs.'});
    
    useEffect(() => {
        
        if(!connected){
            return;
        }
        //set Fetching Nfts
        setErrorState({status:1, message:'Fetching your NFTs...'});

        //detect deer nfts by owner

        (async ()=>{
            //fetch deer nfts from the server
            await new Promise(resolve=>{setTimeout(()=>{resolve()},3000)});
            throw('err');
            
            // console.log(data);
            // setDeerNftsByOwner(data);

            //set success state
            // setErrorState({status:2, message:''});
        })()
        .catch(err=>{
            setErrorState({status:-1, message:'Error while fetching your NFTs...'});
        })
        

        //setdeernfts
        
    }, [connected])

    const handleItemClick = function(element){
        console.log(deerNftsByOwner);
        setSelectedDeerNft(element);
    }

    const stylesCreator = (traitHeader) => {
        return {
            borderBottom: (activeTrait === traitHeader ? "2px solid green" : null),
            fontSize:"inherit"
        }
    }

    const handleSingleTraitClick = (element) => {
        if(activeTrait==='Outfits'){
            setActiveOutfit(element);
        }
        else if(activeTrait==='Caps'){
            setActiveCap(element);
        }
        else if(activeTrait==="Elements"){
            setActiveElement(element);
        }
        
    }

    const handleTranscendClick = async () => {
        //send request if selected gang 0 or 1
        //create transaction from response
        //await approval oftransaction

        let data = {
            senderPubkeyStr: publicKey.toBase58(),
            tokenMintStr: selectedDeerNft.tokenMintStr,
            metadataIdStr: selectedDeerNft.metadataIdStr,
            oldUri: selectedDeerNft.oldUri,
            requestedTraits: {
                base: 'https://nftstorage.link/ipfs/bafybeig5fgy53dttevrpug5kowiulhl472tdyacm3jn7l4g5x7ofuvjtuu/0.png',
            }
        };

        
    
        if(activeOutfit){
            data.requestedTraits.outfit= activeOutfit.name;
        }
        if(activeCap){
            data.requestedTraits.cap= activeCap.name;
        }
        if(activeElement){
            data.requestedTraits.element= activeElement.name;
        }

        let res = await axios.post('http://localhost:5000/api/update',data);
        console.log(res);

        const transaction = Transaction.from(res.data.message.data);

        const txSigned = await signTransaction(transaction);
        
        const signature = await connection.sendRawTransaction(txSigned.serialize());
        console.log(signature);

    }
    
    
    return (
        <div id={traitMarketStyles.traitmarketinnermain} >
            <div id={traitMarketStyles.traitmarketinnerbackgroundwrapper}></div>
            <div style={{width:"100%", display:"flex", flexDirection:"row", justifyContent:"space-between", padding:"10px 20px", boxSizing:"border-box"}} >
                <Link href="/">
                    <a>
                        <BackArrowIcon width="35" height="35" />
                    </a>
                </Link>
                {
                    wallets.map((wallet) => {
                        const option = wallet.adapter;
                        return (
                          <div
                            onClick={() => {
                                setErrorState(connected ? {status:0, message:'Please connect your wallet to see your NFTs.'} 
                                : 
                                {status:1, message:'Fetching your NFTS..'});

                                (
                                    connected ? 
                                    disconnect()
                                    :
                                    connect(option.name)
                                )
                            }}
                            id={option.name.split(' ').join('_')}
                            key={option.name}
                            className={traitMarketStyles["wallet-multi-button"]}>
                                {
                                    connected ? 
                                    "Disconnect"
                                    :
                                    option.name + "Wallet"
                                }
                          </div>
                        );
                      })
                }
            </div>
            <div id={traitMarketStyles["middle-main-wrapper"]} >
                <div id={traitMarketStyles["portrait-wrapper"]} >
                    <div style={{width:275, height:275 }} >
                        {
                            selectedDeerNft ?
                            <div id={traitMarketStyles["imageOverlayWrapper"]} style={{position:"relative"}} >
                                <Image src={selectedDeerNft.nftImageUri} alt="img" id={traitMarketStyles["selected-deer-image"]} />
                                {
                                    activeOutfit ? 
                                    <Image src={activeOutfit.image} alt="img" className={traitMarketStyles["portrait-trait-image"]} />
                                    :
                                    null
                                }
                                {
                                    activeCap ? 
                                    <Image src={activeCap.image} alt="img" className={traitMarketStyles["portrait-trait-image"]} />
                                    :
                                    null
                                }
                                {
                                    activeElement ? 
                                    <Image src={activeElement.image} alt="img" className={traitMarketStyles["portrait-trait-image"]} />
                                    :
                                    null
                                }

                            </div>
                            :
                            null
                        }

                    </div>
                    <div style={{color:"black", textAlign:"center", fontSize:18,fontWeight:550, marginTop: 10, marginBottom: 20}} >
                                {
                                    selectedDeerNft ? selectedDeerNft.nftName : ''
                                }
                        </div>
                    <div style={{height:100, width:"100%", textAlign:"center"}} >
                        <button className={traitMarketStyles["bn29"]} onClick={handleTranscendClick} >Transcend</button>
                    </div>
                </div>
                <div id={traitMarketStyles["traitmarket-ui-wrapper"]} >
                    <div style={{boxSizing:"border-box", marginBottom: 20, position:"relative"}} >
                        <div style={{backgroundColor:"white", opacity:0.5, position:"absolute", left:0,top:0,width:"100%",height:"100%",zIndex:-1}} >
                            
                        </div>
                        <div style={{color:"black", cursor:"pointer", display:"flex", flexDirection:"row", justifyContent:"space-around",
                            fontSize:17,marginBottom:50,  }} >
                            <span onClick={()=>{setActiveTrait('Outfits'); setActiveTraitImageList(outfits) }} style={stylesCreator('Outfits')} >Outfits</span>
                            <span onClick={()=>{setActiveTrait('Caps'); setActiveTraitImageList(caps)}} style={stylesCreator('Caps')} >Caps</span>
                            <span onClick={()=>{setActiveTrait('Elements'); setActiveTraitImageList(elements)}} style={stylesCreator('Elements')} >Elements</span>

                        </div>
                        <div id={traitMarketStyles["trait-wrapper"]} >
                            {
                                activeTraitImageList.map((element,index)=>{
                                    return <MarketItem element={element} key={index} onClickCallback={handleSingleTraitClick} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width:"100%", maxWidth:900, margin:"auto", height:130, display:"flex", flexDirection:"row", overflowX:"auto", 
                paddingBottom:10, boxSizing:"border-box", }} >
                    {
                        errorState.status===1 ?
                        <div style={{fontSize:25, fontWeight:"550", margin:"auto", textAlign:"center"}} >
                            {errorState.message}
                            <br/>
                            <Image src={spinnerLogo} alt="img" className={traitMarketStyles["loading-spinner"]} />
                        </div>
                        :
                        errorState.status===2 ?
                        deerNftsByOwner.map((element,index)=>{
                            return <Image src={element.nftImageUri} alt="img" key={index} style={{height:"100%", width:"auto", cursor:"pointer", marginRight:10}} 
                            onClick={()=>{handleItemClick(element)}} />
                        })
                        :
                        <div style={{fontSize:25, fontWeight:"550", margin:"auto", textAlign:"center"}} >
                            {errorState.message}
                        </div>
                    }
            </div>
        </div>
    )
}


export default TraitMarket;