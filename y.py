import re
from PIL import Image

f = open("elraenn_bayrak.htm")
x = f.read()
f.close()

pixel_re = r"<a.*rgba\(([0-9.,]+).*cx=([0-9]+).*cy=([0-9]+)[^<]*>"
ms = re.findall(pixel_re, x)

data = []

for color_string, x, y in ms:
    r,g,b,a = tuple([int(float(_)) for _ in color_string.split(",")])
    assert a == 1.0
    data.append((r,g,b,a,int(x),int(y)))

x1 = min(d[4] for d in data)
x2 = max(d[4] for d in data)
y1 = min(d[5] for d in data)
y2 = max(d[5] for d in data)

I = Image.new("RGB", (x2-x1+1, y2-y1+1))

for r,g,b,a,x,y in data:
    I.putpixel((x-x1, y-y1), (r,g,b))

print(x1,y1,x2-x1+1,y2-y1+1)

I.save("elraenn.png")
