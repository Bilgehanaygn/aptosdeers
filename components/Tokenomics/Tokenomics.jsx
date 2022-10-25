import tokenomicsStyle from './tokenomics.module.css';
import ADTLogo from '../../assets/ADTLogo.png';
import Image from 'next/future/image';

const Tokenomics = () => {

    return (
        <div style={{textAlign:"center"}} >
            <div style={{fontSize:60, fontWeight:700}} >
                The Tokenomics
            </div>
            <div className={tokenomicsStyle['tokenomics-main-wrapper']} >
                <Image src={ADTLogo} alt="img" className={tokenomicsStyle['adtlogo-image']} />
                <div style={{position:"absolute", top:0, left:0, backgroundColor:"#fff5e8", opacity:0.3, width:"100%", height:"100%"}} ></div>
                <div style={{position:"absolute",top:0, left:0, width:"100%", height:"100%", zIndex:2, textAlign:"left", 
                    padding:5, boxSizing:"border-box", overflowY:"auto"}} >
                    <div className={tokenomicsStyle['headingfonts']} >
                        1- Earning $ADT: 
                    </div>
                    <div className={tokenomicsStyle['paragraphfonts']} >
                        Holders are going to be earning our utility token $ADT not by staking but holding the NFTs in their wallet.
                    </div>
                    <br/>
                    <div className={tokenomicsStyle['headingfonts']} >
                        2- $ADT Utilities: 
                    </div>
                    <div className={tokenomicsStyle['paragraphfonts']} >
                        The $ADT token is going to have 2 utilities but the main utility is our trait market.
                        <br/>
                        In our Trait Market holders can customzie their Deers and for each trait the buy in our trait market, their nft is going to
                        level up (this process will be handling by a level trait in the metadata.)
                        <br/>
                        <span style={{fontWeight:600}} >
                            We are the first project building the art upgrade in APTOS!
                        </span>
                    </div>
                    <br/>
                    <div className={tokenomicsStyle['headingfonts']} >
                        3- Leveling Details: 
                    </div>
                    <div className={tokenomicsStyle['paragraphfonts']} >
                        Each trait will cost a specific amount of $ADT token (you can check trait market for an example.)
                        <br/>
                        Buying traits provide increase in level and increase in $ADT earning:
                    </div>
                    <br/>
                    <div className={tokenomicsStyle['headingfonts']} >
                        4- Deers will start from level 0.
                    </div>
                    <div className={tokenomicsStyle['paragraphfonts']} >
                        Level 0 Deers stakes 10 $ADT/day.
                        <br/>
                        Each level provides additional 2 $ADT/day.
                    </div>
                    <br/>
                    <div className={tokenomicsStyle['headingfonts']} >
                        5- Outfit:
                    </div>
                    <div className={tokenomicsStyle['paragraphfonts']} >
                        Buying an outfit costs approximately 500 $ADT and provides 2 level increase.
                    </div>
                    <br/>
                    <div className={tokenomicsStyle['headingfonts']} >
                        6- Cap:
                    </div>
                    <div className={tokenomicsStyle['paragraphfonts']} >
                        Buying an cap costs approximately 300 $ADT and provides 1 level increase.
                    </div>
                    <br/>
                    <div className={tokenomicsStyle['headingfonts']} >
                        7- Element:
                    </div>
                    <div className={tokenomicsStyle['paragraphfonts']} >
                        Buying an outfit costs approximately 200 $ADT and provides 1 level increase.
                    </div>
                    <br/>
                </div>
            </div>
        </div>
    )
}


export default Tokenomics;