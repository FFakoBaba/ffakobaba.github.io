import sys
from pathlib import Path

from PIL import Image
import numpy as np

I = Image.new("RGBA", (6000,6000))

I_e = Image.open("!dotted_elraenn.png")
print(I_e.size)
x1 = 299
y1 = 343

R = I_e.crop((0,0,I_e.size[0],I_e.size[1]))
I.paste(R,(x1*3,y1*3,x1*3+I_e.size[0],y1*3+I_e.size[1]))

I.save("overlay.png")
