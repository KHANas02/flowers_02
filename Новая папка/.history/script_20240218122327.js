0 unsaved changes 
JS Options
30
    str.className = "star";
31
    str.style.top = `${y + rand(-20, 20)}px`;
32
    str.style.left = `${x}px`;
33
    str.style.color = selRand(colors);
34
    str.style.fontSize = selRand(fsize);
35
    document.body.appendChild(str);
36
    //console.log(rand(0, 3));
37
    const fs = 10 + 5 * parseFloat(getComputedStyle(str).fontSize);
38
    //console.log(vh, y, fs);
39
    //console.log((y+fs)>vh?vh-y:fs);
40
    str.animate(
41
      {
42
        translate: [
43
          `${rand(-5, 5)}px ${
44
            (y + fs > vh ? vh - y : fs) * fallDirection * 0.3
45
          }px`,
46
          `${rand(-20, 20)}px ${(y + fs > vh ? vh - y : fs) * fallDirection}px`
47
        ],
48
        opacity: [1, 0],
49
        transform: [
50
          "rotateX(0) rotateY(0)",
51
          `rotateX(${rand(1, 500)}deg) rotateY(${rand(1, 500)}deg)`
52
        ]
53
      },
54
      {
55
        duration: delay,
56
        fill: "forwards",
57
        rangeStart: ["cover 0% ", "cover 40%"],
58
        rangeEnd: ["cover 40% ", "cover 100%"]
59
      }
60
    );
61
    //could add a animation terminate listener, but why add the additional load
62
    setTimeout(() => {
63
      str.remove();
64
    }, delay);
65
  };
66
​
67
addEventListener("mousemove", (e) => {
68
  const { clientX, clientY } = e;
69
  if (shouldDraw(clientX, clientY)) {
70
    addStr(clientX, clientY);
71
    x1 = clientX;
72
    y1 = clientY;
73
  }
74
});
75
​
