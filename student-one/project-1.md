---
title: 廢文產生器
slug: /
---

## 2021-03-20

<iframe
  src="https://trinket.io/embed/python3/edb0178d6f"
  width="100%"
  height="356"
  frameborder="0"
  marginwidth="0"
  marginheight="0"
  allowfullscreen
></iframe>

```py
print('歡迎使用廢文產生器')
name= input()
template1=f'''我覺得{name}非常的厲害。
生活中，若{name}出現了，
我們就不得不考慮它出現了的事實。'''

template2=f'''對於{name}，我們不能不去想，卻也不能走火入魔。
在這種不可避免的衝突下，我們必須解決這個問題。
我們不得不相信，想必大家都能了解{name}的重要性，
所以我們一起來審視{name}吧。'''

template3=f'''若到今天結束時我們都還無法釐清{name}的意義，
那想必我們未來也無法釐清。'''
template4=f'''不要先入為主覺得{name}很複雜，
實際上，{name}可能比你想的還要更複雜。'''
template5=f'''愛獻生曾經提到過，報紙總是盡它最大的努力讓每平
方米英畝土地和海面都來到人們的早餐桌上，
陳述各自的故事。這影響了我的價值觀。他會這麼說是有理由的。
在人類的歷史中，我們總是盡了一切努力想搞懂{name}。'''
print('''請輸入數字50以內''')

num = int(input())
if 1 <= num <= 10:
    print(template1)
if 11 <= num <= 20:
    print(template2)
if 21 <= num <= 30:
    print(template3)
if 31 <= num <= 40:
    print(template4)
if 41 <= num <= 50:
    print(template5)
```
