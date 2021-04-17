---
title: "2021-04-10"
---

## 課程內容

檢討作業、RPG 遊戲設計（文字遊戲設計）

## 補充

### 剪刀石頭布

```py
import random
import time

w = 0
l = 0
s = 0
while True:
    print(w, l, s)
    print('請輸入你要出的（剪刀、石頭、布）')
    user = input()

    com = random.choice(['剪刀', '石頭', '布'])
    # print('電腦出', com)
    print(user, 'vs', com)

    if user == com:
        print('平手')
        s += 1
    elif user == '剪刀' and com == '石頭':
        print('你輸了')
        l += 1
    elif user == '剪刀' and com == '布':
        print('你贏了')
        w += 1
    elif user == '石頭' and com == '剪刀':
        print('你贏了')
        w += 1
    elif user == '石頭' and com == '布':
        print('你輸了')
        l += 1
    elif user == '布' and com == '剪刀':
        print('你輸了')
        l += 1
    elif user == '布' and com == '石頭':
        print('你贏了')
        w += 1

    time.sleep(2)
    print()

```

### 寵物機

```py
print('寵物機')

hi_i_am_a_variable = 0

love = 0
egg = '''
    ---------

        o
    ---------
    '''
chicken = '''
    ---------
         o>
        ^^
    ---------
'''
while True:

    if love < 10:
        print(egg)
    else:
        print(chicken)

    print(f'親密度: {love}')

    if love < 10:
        print('1) 孵蛋')
    else:
        print('1) 餵食')
        print('2) 玩耍')
    print('請輸入選項：')
    o = int(input())
    if o == 1:
        love += 2

```

## 作業

1. 完成遊戲設計。
2. ZeroJudge: d460。

上課來不及帶到 ZeroJudge 作業的寫法，第一堂課的時候雖然有做過一次，但可能已經有些忘記了，還請家長協助操作～

## 學習狀況

### 整體狀況

大家都很有創意

### 唯

有點害羞不敢給人看作品，但是作品很有趣～

### 湛

選的題目比較難，可以多想想

### 暐

前四堂遠距

### 昊

穩穩地做完剪刀石頭布，功能也是最完整的。回家可以先預習

### 楷

很有想法可是來不及做邏輯，期待下次能看到完整版～

## 下次上課

- 發表作品、練習 ZeroJudge、迴圈、

## 備註
