import React from 'react'
import Name from './Name'
import Email from './Email'
import Address from './Address'
import PersonalInfo from './PersonalInfo'
import './Profile.css'


const Profile = () => {
  return (
    <div className='portfolie'>
        <Name name= "Eynulla Mirzezade"/>
        <Email mail="eynullamirzezade@gmail.com"/>
        <Address adress="Sumgait city"/>
        <PersonalInfo info="I am 20 years old. I am learning programming languages. In my spare time, I like to listen to music and play chess."/>
        
        </div>
  )
}

export default Profile