---
title: 第二步：加入精靈圖（Sprites）
---

接下來我們要加入一些
[精靈圖（sprites）](<https://en.wikipedia.org/wiki/Sprite_(computer_graphics)>)。
精靈圖是可以在畫面上呈現並互動的圖像。

![image](https://arcade.academy/_images/listing_02.png)

## Setup vs. Init

---

In the next code example, `02_draw_sprites`, we'll have both an
`__init__` method and a `setup`.

The `__init__` creates the variables. The variables are set to values
such as 0 or `None`. The `setup` actually creates the object instances,
such as graphical sprites.

I often get the very reasonable question, "Why have two methods? Why not
just put everything into `__init__`? Seems like we are doing twice the
work." Here's why. With a `setup` method split out, later on we can
easily add "restart/play again" functionality to the game. A simple call
to `setup` will reset everything. Later, we can expand our game with
different levels, and have functions such as `setup_level_1` and
`setup_level_2`.

## Sprite Lists

Sprites are managed in lists. The `SpriteList` class optimizes drawing,
movement, and collision detection.

We are using three logical groups in our game. A `player_list` for the
player. A `wall_list` for walls we can't move through. And finally a
`coin_list` for coins we can pick up.

```{.sourceCode .}
self.player_list = arcade.SpriteList()
self.wall_list = arcade.SpriteList(use_spatial_hash=True)
self.coin_list = arcade.SpriteList(use_spatial_hash=True)
```

```py
"""
Platformer Game
"""
import arcade

# Constants
SCREEN_WIDTH = 1000
SCREEN_HEIGHT = 650
SCREEN_TITLE = "Platformer"

# Constants used to scale our sprites from their original size
CHARACTER_SCALING = 1
TILE_SCALING = 0.5
COIN_SCALING = 0.5


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
        # Create the Sprite lists
        self.player_list = arcade.SpriteList()
        image_source = ":resources:images/animated_characters/female_adventurer/femaleAdventurer_idle.png"
        self.player_sprite = arcade.Sprite(image_source, CHARACTER_SCALING)
        self.player_sprite.center_x = 64
        self.player_sprite.center_y = 128
        self.player_list.append(self.player_sprite)

    def on_draw(self):
        """ Render the screen. """

        # Clear the screen to the background color
        arcade.start_render()

        # Draw our sprites
        self.player_list.draw()


def main():
    """ Main method """
    window = MyGame()
    window.setup()
    arcade.run()


if __name__ == "__main__":
    main()

```

Sprite lists have an option to use something called "spatial hashing."
Spatial hashing speeds the time it takes to find collisions, but
increases the time it takes to move a sprite. Since I don't expect most
of my walls or coins to move, I'll turn on spatial hashing for these
lists. My player moves around a lot, so I'll leave it off for her.

## Add Sprites to the Game

To create sprites we'll use the `arcade.Sprite` class. We can create an
instance of the sprite class with code like this:

```{.sourceCode .}
self.player_sprite = arcade.Sprite("images/player_1/player_stand.png", CHARACTER_SCALING)
```

The first parameter is a string or path to the image you want it to
load. An optional second parameter will scale the sprite up or down. If
the second parameter (in this case a constant `CHARACTER_SCALING`) is
set to 0.5, and the the sprite is 128x128, then both width and height
will be scaled down 50% for a 64x64 sprite.

> **Built-in Resources**
>
> The arcade library has a few built-in resources so we can run examples
> without downloading images. If you see code samples where sprites are
> loaded beginning with "resources", that's what's being referenced.

Next, we need to tell _where_ the sprite goes. You can use the
attributes `center_x` and `center_y` to position the sprite. You can
also use `top`, `bottom`, `left`, and `right` to get or set the sprites
location by an edge instead of the center. You can also use `position`
attribute to set both the x and y at the same time.

```{.sourceCode .}
self.player_sprite.center_x = 64
self.player_sprite.center_y = 120
```

Finally, all instances of the `Sprite` class need to go in a
`SpriteList` class.

```{.sourceCode .}
self.player_list.append(self.player_sprite)
```

We manage groups of sprites by the list that they are in. In the example
below there's a `wall_list` that will hold everything that the player
character can't walk through, and a `coin_list` for sprites we can pick
up to get points. There's also a `player_list` which holds only the
player.

- Documentation for the [Sprite
  class](../../arcade.html#arcade.Sprite)
- Documentation for the [SpriteList
  class](../../arcade.html#arcade.SpriteList)

Notice that the code creates `Sprites` three ways:

- Creating a `Sprite` class, positioning it, adding it to the list
- Create a series of sprites in a loop
- Create a series of sprites using coordinates

> **note**
>
> Once the code example is up and working:
>
> - Adjust the code and try putting sprites in new positions.
> - Use different images for sprites (see the images folder).
> - Practice placing individually, via a loop, and by coordinates in a
>   list.

```py {11-14,27-34,38-70,78-81}
"""
Platformer Game
"""
import arcade

# Constants
SCREEN_WIDTH = 1000
SCREEN_HEIGHT = 650
SCREEN_TITLE = "Platformer"

# Constants used to scale our sprites from their original size
CHARACTER_SCALING = 1
TILE_SCALING = 0.5
COIN_SCALING = 0.5


class MyGame(arcade.Window):
    """
    Main application class.
    """

    def __init__(self):

        # Call the parent class and set up the window
        super().__init__(SCREEN_WIDTH, SCREEN_HEIGHT, SCREEN_TITLE)

        # These are 'lists' that keep track of our sprites. Each sprite should
        # go into a list.
        self.coin_list = None
        self.wall_list = None
        self.player_list = None

        # Separate variable that holds the player sprite
        self.player_sprite = None

        arcade.set_background_color(arcade.csscolor.CORNFLOWER_BLUE)

    def setup(self):
        """ Set up the game here. Call this function to restart the game. """
        # Create the Sprite lists
        self.player_list = arcade.SpriteList()
        self.wall_list = arcade.SpriteList(use_spatial_hash=True)
        self.coin_list = arcade.SpriteList(use_spatial_hash=True)

        # Set up the player, specifically placing it at these coordinates.
        image_source = ":resources:images/animated_characters/female_adventurer/femaleAdventurer_idle.png"
        self.player_sprite = arcade.Sprite(image_source, CHARACTER_SCALING)
        self.player_sprite.center_x = 64
        self.player_sprite.center_y = 128
        self.player_list.append(self.player_sprite)

        # Create the ground
        # This shows using a loop to place multiple sprites horizontally
        for x in range(0, 1250, 64):
            wall = arcade.Sprite(":resources:images/tiles/grassMid.png", TILE_SCALING)
            wall.center_x = x
            wall.center_y = 32
            self.wall_list.append(wall)

        # Put some crates on the ground
        # This shows using a coordinate list to place sprites
        coordinate_list = [[512, 96],
                           [256, 96],
                           [768, 96]]

        for coordinate in coordinate_list:
            # Add a crate on the ground
            wall = arcade.Sprite(":resources:images/tiles/boxCrate_double.png", TILE_SCALING)
            wall.position = coordinate
            self.wall_list.append(wall)

    def on_draw(self):
        """ Render the screen. """

        # Clear the screen to the background color
        arcade.start_render()

        # Draw our sprites
        self.wall_list.draw()
        self.coin_list.draw()
        self.player_list.draw()


def main():
    """ Main method """
    window = MyGame()
    window.setup()
    arcade.run()


if __name__ == "__main__":
    main()
```
