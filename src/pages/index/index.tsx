import { View, Text, Button } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'
import { useState } from 'react'

export default function Index() {

  const [msg, setMsg] = useState('Welcom to taro')

  useLoad(() => {
    console.log('Page loaded.')
  })

  const onClick = () => {

    setMsg(pre => pre + "!")
  }

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <Button onClick={onClick} className='btn'>Click me</Button>
      <Text>You Are Good Person</Text>
      <View>{msg}</View>
    </View>
  )
}
