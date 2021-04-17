---
title: 第一步：安裝與建立視窗
---

Our first step is to make sure everything is installed, and that we can at least
get a window open.

要先安裝，然後建立一個視窗來測試

## 安裝

- 確保已安裝 Python `Download Python here <https://www.python.org/downloads/>`\_
  if you don't already have it.

- 下載這個[資源包](https://arcade.academy/_static/platform_tutorial.zip)（包含程式碼、圖像、音效等）(Images are from `kenney.nl` Your file structure should look like:

![file_structure](https://arcade.academy/_images/file_structure.png)

- 確保已安裝 [Arcade](https://pypi.org/project/arcade/) 套件.
  - Install Arcade with `pip install arcade` on Windows
    or `pip3 install arcade` on Mac/Linux. Or install by using a venv.
  - 這是更長的官方[安裝說明](https://arcade.academy/installation.html#installation-instructions)

I highly recommend using the free community edition of PyCharm as an editor.
If you do, see :ref:`install-pycharm`.

可以用 VS Code, PyCharm

## 建立一個視窗

下面的範例程式碼可以開啟一個空白的視窗。設定好專案並測試看看吧。

這是一個固定尺寸的視窗。除此之外你也可以使用 `resizable_window` 跟 `full_screen_example`，但我們可以先做其他有趣的事。

```py
"""
Platformer Game
"""
import arcade

# Constants
SCREEN_WIDTH = 1000
SCREEN_HEIGHT = 650
SCREEN_TITLE = "Platformer"


class MyGame(arcade.Window):
    """
    Main application class.
    """

    def __init__(self):

        # Call the parent class and set up the window
        super().__init__(SCREEN_WIDTH, SCREEN_HEIGHT, SCREEN_TITLE)

        arcade.set_background_color(arcade.csscolor.CORNFLOWER_BLUE)

    def setup(self):
        """ Set up the game here. Call this function to restart the game. """
        pass

    def on_draw(self):
        """ Render the screen. """

        arcade.start_render()
        # Code to draw the screen goes here


def main():
    """ Main method """
    window = MyGame()
    window.setup()
    arcade.run()


if __name__ == "__main__":
    main()
```

01_open_window.py - 建立一個視窗

試著做做看：

- 更改螢幕尺寸
- 更改標題
- 更改背景顏色

  - See the documentation for :ref:`color`
  - See the documentation for :ref:`csscolor`

- Look through the documentation for the
  `Window <../../arcade.html#arcade.Window>`\_ class to get an idea of everything
  it can do.
