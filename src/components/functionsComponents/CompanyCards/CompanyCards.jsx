import React from 'react'
import classes from './CompanyCards.module.scss'

const CompanyCards = ({ image, name, body }) => {
  return (
    <div className={classes.companyCards}>
      <div className={classes.photoCompany}>
        <img src={image} alt="imageCompany" />
      </div>

      <div className={classes.textCompany}>
        <h3 className={classes.nameCompany}>{name}</h3>
        <p className={classes.bodyCompany}>{body}</p>
      </div>
    </div>
  )
}

export default CompanyCards