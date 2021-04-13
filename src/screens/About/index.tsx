import React from 'react';
import Profile from '../../components/Profile'
import Info from '../../components/Info'
import { profile, about } from '../../lib/data'

export default () => {

  return (
    <>
      <Profile
        header={profile.header}
        subheader={profile.subheader}
        ctaText={profile.ctaText}
        image={profile.image}
      />
      <Info
        title={about.title}
        description={about.description} />
    </>
  )
}
