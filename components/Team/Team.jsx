import React, {useState} from 'react';
import teamStyles from './team.module.css';
import Image from 'next/future/image';
import LeifanSneakPeek from '../../assets/sneakpeeks/LeifanSneakPeek.png';
import RonmelSneakPeek from '../../assets/sneakpeeks/RonmelSneakPeek.png';
import CornerSneakPeek from '../../assets/sneakpeeks/CornerSneakPeek.png';
import XENSneakPeek from '../../assets/sneakpeeks/XENSneakPeek.png';
import TwitterIcon from '../Icons/TwitterIcon/TwitterIcon';
import Link from 'next/link';

const TeamMember = ({props}) => {

    const [isHover, setIsHover] = useState(false);
    console.log(isHover)

    return (
        <div className={teamStyles['teammember-wrapper']}
        onMouseOver={()=>{setIsHover(true)}} onMouseLeave={()=>{setIsHover(false)}} >
            <Image src={props.image} alt="img" className={teamStyles['teammember-image']} />
            <div style={{padding:"5px 5px"}} >
                <div style={{fontWeight:500, fontSize:20}} >
                    {props.name} | {props.role}
                </div>
                <div style={{fontWeight:700, fontSize:15, marginTop:2, marginBottom:10}} >
                    <Link href={props.twitter} target="_blank" > 
                        <a>
                            <TwitterIcon/>
                            @{props.twitter.split('.com/')[1]}
                        </a>
                    </Link>
                </div>
                <div className={teamStyles['explanation-wrapper' + (isHover ? '-visible' : '')]} >
                    {props.explanation}
                </div>
            </div>

        </div>
    )
}

const Team = () => {

    const members = [
        {
            image:LeifanSneakPeek, name:"Leifan.SOL", twitter:"https://twitter.com/LeifanPOOR", role:"Founder", 
            explanation:"Leifan is the co-founder and the team leader of Aptos Deers. He comes up with visionary ideas, and ensures the success is achieved."
        },
        {
            image:RonmelSneakPeek, name:"Ronmel", twitter:"https://twitter.com/Ronmel_SOL", role:"Comm. Manager", 
            explanation:"Ronmel is a Blocksmith, a Cet, an Atadia, a Just Ape, he rocks for almost every project in the space. He has been in the Solana Space for almost a year. He loves the vibes, chills and make the people love the vibes and makes them chill. He takes care of the community."
        },
        {
            image:CornerSneakPeek, name:"Cornflouryyn", twitter:"https://twitter.com/cornflouryyn", role:"Developer", 
            explanation:"Cornflouryyn is experienced with web2 for more than 5 years. He is responsible for the front-end and the back-end of our trait market. By the help of an external web3 developer, he built the complete trait market for us."
        },
        {
            image:XENSneakPeek, name:"XEN", twitter:"https://twitter.com/XENFT46", role:"Artist", 
            explanation:"XEN is our super talented artist (you guys can see his artworks in his twitter. He made our complete collection, including designing the base character."
        }
    ]

    return (
        <div className={teamStyles['teammain-container']} >
            <div style={{fontWeight:700, fontSize:60, textAlign:"center", marginBottom:30}} >
                Meet The Team
            </div>
            <div className={teamStyles['teammembers-container']} >
            {
                members.map((element,index)=>
                    <TeamMember props={element} key={index}/> 
                )
            }
            </div>

         </div>
    )
}

export default Team;