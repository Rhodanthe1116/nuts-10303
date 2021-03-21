---
title: 廢文產生器
slug: /
---

## 2021-03-20

<iframe
  src="https://trinket.io/embed/python3/916d7205d6"
  width="100%"
  height="356"
  frameborder="0"
  marginwidth="0"
  marginheight="0"
  allowfullscreen
></iframe>

```py
print('歡迎使用廢文產生器')
print('輸入主題')
name=input()
print('請輸入大約字數')
num=int(input())
template1=f'''問題的關鍵看似不明確，但想必在諸位心中已有了明確的答案。話雖如此，這樣看來，紀伯倫告訴我們，
            和你一同笑過的人，你可能把他忘掉; 但是一同和你哭過的人，你卻永遠不忘。希望大家實際感受一下這段話。
            現在，正視{name}的問題，是非常非常重要的。因為，彌爾頓在不經意間這樣說過，指責人民有眼無珠的
            往往就是那些蒙住人民眼睛的人。這句話看似簡單，卻埋藏了深遠的意義。'''
template2=f'''若沒有{name}的存在，那麼後果可想而知。{name}可以說是有著成為常識的趨勢。瓦萊里曾經說過，預見是一種夢境，事件把我們從這夢境中喚醒。
            這影響了我的價值觀。'''
template3=f'''要想清楚，{name}，到底是一種怎麼樣的存在。'''
if num < 30:
    print(template3)
elif 30 < num < 100:
    print(template2)
else:
    print(template1)
```

<iframe
  src="https://trinket.io/embed/python3/055c60f8a0"
  width="100%"
  height="356"
  frameborder="0"
  marginwidth="0"
  marginheight="0"
  allowfullscreen
></iframe>

```py
print('歡迎使用廢文產生器')
print('輸入主題')
name=input()
template1=f'''問題的關鍵看似不明確，但想必在諸位心中已有了明確的答案。話雖如此，這樣看來，紀伯倫告訴我們，
            和你一同笑過的人，你可能把他忘掉; 但是一同和你哭過的人，你卻永遠不忘。希望大家實際感受一下這段話。
            現在，正視{name}的問題，是非常非常重要的。因為，彌爾頓在不經意間這樣說過，指責人民有眼無珠的
            往往就是那些蒙住人民眼睛的人。這句話看似簡單，卻埋藏了深遠的意義。'''
template2=f'''若沒有{name}的存在，那麼後果可想而知。{name}可以說是有著成為常識的趨勢。瓦萊里曾經說過，預見是一種夢境，事件把我們從這夢境中喚醒。
            這影響了我的價值觀。'''
template3=f'''要想清楚，{name}，到底是一種怎麼樣的存在。'''
import random
num=random.randint(1,180)
if num < 30:
    print(template3)
elif 30 < num < 100:
    print(template2)
else:
    print(template1)

```
