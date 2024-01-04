import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Todo() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='todo'>
      <Text>Todo Page Here!</Text>
    </View>
  )
}
