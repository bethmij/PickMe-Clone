import React from 'react'
import { Button, Title } from 'react-native-paper'

interface btnProps{
    value:string;
    styles:string;
    mode:any
}

export default function PassBtn({value,styles,mode}:btnProps) {
  return (
    <Button mode={mode} className={styles}>{value}</Button>
  )
}
