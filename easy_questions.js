// 2~7주차 강의자료와 공지 키워드에서 새로 작성한 독립 문제은행.
const EASY_QUESTIONS = [
  {
    "id": "easy-2-1-01",
    "week": 2,
    "keyword": "2-1",
    "question": "정신과 신체가 서로 원인이 될 수 있다고 설명한 인물은?",
    "choices": [
      "데카르트",
      "라이프니츠",
      "말브랑슈",
      "스피노자",
      "스마트"
    ],
    "answer": 0,
    "explanation": "정신과 신체의 인과적 상호작용을 주장한다.",
    "choiceExplanations": [
      "정신과 신체의 인과적 상호작용을 주장한다.",
      "서로 독립적인 단자들이 신의 사전 조율로 조화를 이룬다는 예정조화론이다.",
      "사건은 기회이고 신이 진정한 원인이라는 기회원인론이다.",
      "신 또는 자연이라는 한 실체의 두 양상으로 정신과 신체를 설명한다.",
      "물과 H₂O, 번개와 전기 방전의 동일성을 심신 동일성에 비유한다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-2-1-02",
    "week": 2,
    "keyword": "2-1",
    "question": "신이 처음부터 맞춰 놓은 두 시계에 비유되는 입장의 학자는?",
    "choices": [
      "스마트",
      "라이프니츠",
      "데카르트",
      "스피노자",
      "말브랑슈"
    ],
    "answer": 1,
    "explanation": "서로 독립적인 단자들이 신의 사전 조율로 조화를 이룬다는 예정조화론이다.",
    "choiceExplanations": [
      "물과 H₂O, 번개와 전기 방전의 동일성을 심신 동일성에 비유한다.",
      "서로 독립적인 단자들이 신의 사전 조율로 조화를 이룬다는 예정조화론이다.",
      "정신과 신체의 인과적 상호작용을 주장한다.",
      "신 또는 자연이라는 한 실체의 두 양상으로 정신과 신체를 설명한다.",
      "사건은 기회이고 신이 진정한 원인이라는 기회원인론이다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-2-1-03",
    "week": 2,
    "keyword": "2-1",
    "question": "자료에서 사건의 진정한 원인을 신으로 설명한 학자는?",
    "choices": [
      "스피노자",
      "스마트",
      "데카르트",
      "라이프니츠",
      "말브랑슈"
    ],
    "answer": 4,
    "explanation": "사건은 기회이고 신이 진정한 원인이라는 기회원인론이다.",
    "choiceExplanations": [
      "신 또는 자연이라는 한 실체의 두 양상으로 정신과 신체를 설명한다.",
      "물과 H₂O, 번개와 전기 방전의 동일성을 심신 동일성에 비유한다.",
      "정신과 신체의 인과적 상호작용을 주장한다.",
      "서로 독립적인 단자들이 신의 사전 조율로 조화를 이룬다는 예정조화론이다.",
      "사건은 기회이고 신이 진정한 원인이라는 기회원인론이다."
    ],
    "sourcePage": 2
  },
  {
    "id": "easy-2-1-04",
    "week": 2,
    "keyword": "2-1",
    "question": "‘신 또는 자연’이라는 단 하나의 실체를 전제하는 학자는?",
    "choices": [
      "라이프니츠",
      "말브랑슈",
      "스마트",
      "데카르트",
      "스피노자"
    ],
    "answer": 4,
    "explanation": "신 또는 자연이라는 한 실체의 두 양상으로 정신과 신체를 설명한다.",
    "choiceExplanations": [
      "서로 독립적인 단자들이 신의 사전 조율로 조화를 이룬다는 예정조화론이다.",
      "사건은 기회이고 신이 진정한 원인이라는 기회원인론이다.",
      "물과 H₂O, 번개와 전기 방전의 동일성을 심신 동일성에 비유한다.",
      "정신과 신체의 인과적 상호작용을 주장한다.",
      "신 또는 자연이라는 한 실체의 두 양상으로 정신과 신체를 설명한다."
    ],
    "sourcePage": 2
  },
  {
    "id": "easy-2-1-05",
    "week": 2,
    "keyword": "2-1",
    "question": "라이프니츠의 단자에 대한 설명 중 옳지 않은 것은?",
    "choices": [
      "미리 정해진 조화를 이룬다.",
      "다른 단자에 직접 인과작용한다.",
      "독립적인 실체이다.",
      "고유한 내적 법칙을 가진다.",
      "더 이상 나눌 수 없다."
    ],
    "answer": 1,
    "explanation": "단자는 서로 직접 상호작용하지 않는다고 설명한다.",
    "choiceExplanations": [
      "직접 작용 대신 사전에 조율된 조화를 이룬다.",
      "단자는 서로 직접 상호작용하지 않는다고 설명한다.",
      "자료는 단자를 독립적인 실체로 설명한다.",
      "단자마다 고유한 목적과 내적 법칙이 있다.",
      "자료의 단자 정의에 포함된다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-2-1-06",
    "week": 2,
    "keyword": "2-1",
    "question": "기회원인론에서 ‘손을 움직이려는 마음’의 지위는?",
    "choices": [
      "신의 작용을 위한 기회",
      "손을 직접 움직이는 유일한 원인",
      "신체와 동일한 물리 상태",
      "인과적 역할 자체가 없는 감각질",
      "독립적으로 작동하는 단자들의 사전 조화"
    ],
    "answer": 0,
    "explanation": "마음이 직접 손을 움직이는 원인이 아니라 신이 작용하는 기회이다.",
    "choiceExplanations": [
      "마음이 직접 손을 움직이는 원인이 아니라 신이 작용하는 기회이다.",
      "실제로 손을 움직이게 하는 진정한 원인은 신이다.",
      "이는 동일론과 관련되며 기회원인론의 설명이 아니다.",
      "부수현상론의 심적 사건 설명과 구별해야 한다.",
      "이 설명은 예정조화론이다."
    ],
    "sourcePage": 2
  },
  {
    "id": "easy-2-1-07",
    "week": 2,
    "keyword": "2-1",
    "question": "스피노자에게 정신과 신체가 일치하는 이유는?",
    "choices": [
      "서로 다른 실체가 직접 힘을 주기 때문",
      "매번 신이 두 실체를 연결하기 때문",
      "정신이 신체의 인과적 부산물이기 때문",
      "행동 성향이 정신을 대체하기 때문",
      "한 실체를 두 관점에서 보기 때문"
    ],
    "answer": 4,
    "explanation": "두 실체의 상호작용이 아니라 한 실체의 두 양상이다.",
    "choiceExplanations": [
      "두 실체의 인과적 상호작용은 데카르트의 설명이다.",
      "매개자 신의 개입은 기회원인론의 특징이다.",
      "심적 사건의 부산물 설명은 부수현상론이다.",
      "행동 성향은 철학적 행동주의의 설명이다.",
      "두 실체의 상호작용이 아니라 한 실체의 두 양상이다."
    ],
    "sourcePage": 2
  },
  {
    "id": "easy-2-1-08",
    "week": 2,
    "keyword": "2-1",
    "question": "두뇌에서 생긴 심적 사건이 다시 원인으로 작용하지 못한다는 견해는?",
    "choices": [
      "부수현상론",
      "동일론",
      "상호작용론",
      "양면 이론",
      "기회원인론"
    ],
    "answer": 0,
    "explanation": "심적 사건은 두뇌 상태에서 발생하지만 그 자체의 인과적 효력은 없다.",
    "choiceExplanations": [
      "심적 사건은 두뇌 상태에서 발생하지만 그 자체의 인과적 효력은 없다.",
      "심적 상태를 일정한 두뇌의 물리적 상태와 동일시한다.",
      "정신과 신체 사이에 양방향 인과작용을 인정한다.",
      "하나의 실체가 정신과 신체라는 두 양상으로 표현된다.",
      "개별 사건은 기회이고 신이 사건을 일으키는 진정한 원인이다."
    ],
    "sourcePage": 2
  },
  {
    "id": "easy-2-1-09",
    "week": 2,
    "keyword": "2-1",
    "question": "이 심신 도식에서 화살표의 관계와 맞는 이론은?",
    "choices": [
      "상호작용론",
      "부수현상론",
      "유물론",
      "관념론",
      "양면 이론"
    ],
    "answer": 0,
    "explanation": "정신과 신체 사이에 양방향 인과작용을 인정한다.",
    "choiceExplanations": [
      "정신과 신체 사이에 양방향 인과작용을 인정한다.",
      "심적 사건은 두뇌 상태에서 발생하지만 그 자체의 인과적 효력은 없다.",
      "3쪽 그림에서는 실선으로 그린 신체 모습만 나타난다.",
      "3쪽 그림에서는 점선으로 그린 정신 모습만 나타난다.",
      "하나의 실체가 정신과 신체라는 두 양상으로 표현된다."
    ],
    "sourcePage": 3,
    "image": "data:image/png;base64,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"
  },
  {
    "id": "easy-2-1-10",
    "week": 2,
    "keyword": "2-1",
    "question": "몸에서 마음 쪽으로만 화살표가 있는 이 도식의 이론은?",
    "choices": [
      "부수현상론",
      "상호작용론",
      "유물론",
      "관념론",
      "양면 이론"
    ],
    "answer": 0,
    "explanation": "심적 사건은 두뇌 상태에서 발생하지만 그 자체의 인과적 효력은 없다.",
    "choiceExplanations": [
      "심적 사건은 두뇌 상태에서 발생하지만 그 자체의 인과적 효력은 없다.",
      "정신과 신체 사이에 양방향 인과작용을 인정한다.",
      "3쪽 그림에서는 실선으로 그린 신체 모습만 나타난다.",
      "3쪽 그림에서는 점선으로 그린 정신 모습만 나타난다.",
      "하나의 실체가 정신과 신체라는 두 양상으로 표현된다."
    ],
    "sourcePage": 3,
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAAEOCAIAAAB0MgDgAABNS0lEQVR4nO29aXBb53U+/t6LfV8IAgQJ7gQ3kRJFkZRIiZIoarEsU4qcOHa8xU3stGmadqbT6Uymbb60aSfJtOmkaZLGjZvES5zElmTJsmSZ2sVVJEVK3Pd9wb4vFxe4vw/nj/cPUyJNURBEQXg+aEAIuLj3vuee9yzPOYdgGAYl8MSDfNQnkMCGQEIOEkAoIQcJANiP+gQeb9A0zWKxCIJACIGlhV/7/X4ejxcMBlksFkVRCCGfz0fTdDAYDAaDSqWSy+XSNM1ms/GhSJIkSTIUCrFYLIZhGIYhCCIUCuHDwguCIBiGCYVCRBjwi/gz60BCDh4UwWAQpIHD4cDyUBQFrxFCXq/X7/ffuXNnYWFhdHTU4/HQNB0IBHbs2FFdXZ2WlhYKhSwWS19fH0VRcrk8NTVVoVCIRCKEUCgUAilZJmEoLA3wAiQGTmbdopCQgwcCwzAkScLdp2kaIYT/DAaDVqvVaDROTU2999573d3dc3NzoTAmJyfVarVarZ6amjp9+vSVK1c8Ho9cLk9PT9fr9RUVFSUlJRKJhGEYFouFH32GYWiaZhiGw+GQJAknAAfEv7s+JOTggUDTtEAgYLFYCCFQ+CRJcjicO3fu9Pb2Dg0Nzc7O2my23t5ep9PJYrF8Ph/DMMFgkGEYHo/HMIzZbL5+/fqNGzc8Hg+LxeLz+enp6SaTSalU6vV6hBCbzYbdATYO+F1YeJAAgiBgQ3mQC0nIwQOBw+HARsDj8VgsFk3Tw8PDk5OTFy9eHBkZaWlpcTgcGRkZR44cyc7O9vv9JEk6nU6DwVBZWVlQUCAQCLKzsw8ePMjn8/v6+qampvx+P4gIl8vFasZgMExPT7tcLo1Gk5WVJRaLQQ0EAoFQKMThcNhsNrYn1nchRCKO9IAAkxAhZLFYBgYGLly40N7ePjExQVGU0WgsLi7ev3//G2+8kZ6e7vf7hUKhzWabn5/X6XTJycmBQIAkyYWFhfHx8f7+foPBwOFwUlNTt23blpubKxAIQGFcunTp448/XlxcrKysPHbsWGlpqVAoZBgmEAgEg0EulwsiiBDCVuf9IqEPHghut1skEnG53PHx8XPnzn3yySd9fX1LS0s0TYtEorKysm9/+9vl5eVgDyqVSoZhkpKSRCKRSCSCzV4gEKSmpiqVypKSEpIkWSxWIBAQiUR8Ph9bmjMzM52dnaOjo/Pz84FAwOl0VlRUSCQSsBIexCzASMjBAwEsA6fT2dHRceLEidbWVp/Px+fzU1JSjh8/vnfv3n379hEEIRAIKIryeDxCoZDNZmPPAu/u8D6LxSJJkqIo2PtpmuZwODKZrKCgQK/Xz8/PT0xMnD592u12K5XKvLw8qVRKkiTsCOBqrvtCEnJwH4i02/1+P35kWSyWzWYTi8VlZWWBQCA9Pf3IkSMVFRVZWVkymYyiKFhjn88XCoXwLk6SJI/HQwiBGQhCQBAEl8vFez+XyxWJRFu3bn3ppZc4HE5jY+Pk5GRXV9fAwIBOpxMKhTjYAAdc96Ul5OA+gDUwPM0ovB8LhUIIBiCEKIrKzs7OzMzkcrk8Ho8gCFhscPZgwTgcDhwK1ElkyAgcUazt4UHXaDR1dXVsNtvn8zU1NdlsNoPBQFEUCCUojwe8tIQcrAkQFowM6sHqcjgcs9ksEAiKiory8vIIgvB4PCqVKhAIEAQBy4y/giM/yw4OaxkZIKJpGmxP7JRKpdKdO3cyDJORkUFRVGZmpkQiwRLz4MZ+wl9YEyIDwIFAgMPhIISCweCZM2du3bqVnZ1dW1ubk5ODEDKZTCqV6p6220quXWSACL8D1gObzWaz2RCNZrPZDodjYWHB7/cnJydrtVoIVEskEhTWHIl44sMFi8UClcAwDISNEUKLi4tvvvnmrVu3amtr8/Pzc3NzEUICgQB/a1m4d6VFwpFp2OBpmrbZbF6vF35RrVbz+Xx49KVSKWiIUCg0MzPT0dFBEMT27dt1Ot0qx18LEnKwJoCuxts5Qsjtdre1tU1OTlqtVrlcnpSUBJ+ErBIIyrJcAPq8hYEiBAXkzO/32+32kZGR1tbWwcFBmqb1en1OTo5Op8vMzExPT4fgEkmSXq93ZGTk1KlT4HmqVCowWhP64KEjEAjAMoA0TE5Onj59enp6msvlFhUVqdVqiqK4XC6Xy8VfWV0NAMDkNJlMzc3Nra2tU1NTCwsLc3NzNpsNIdTc3KzVaqVSaW5u7qFDh2pqapKTkxFCbDabJEmj0Tg3NzcyMlJVVYVdj/VdXUIO1opAIAAPHDzrU1NTly9fpigqJyentLRUKpX6/X4I7YF7iT6/KmAcYNcOewcIIYfDcfr06TNnzkD4AY4AmQjwOcfGxrq7u5eWljgcTlVVFViIkJb0er02m83v9z9gNCkhB2uC1+sVi8Vwr0OhkNFoPHfu3Pz8PJfLPXLkSEFBAfYgAPc0BlHEduBwOGQymc/n6+joOHnyZGNj4/T0tNvtTklJ2blzp16vdzqdc3NzJEmKxeKenp6hoaFr164FAgG/33/kyBE2mw2+IsMwTqcTclcoEVd+2CAIgqKoUCjE4/E8Hs+HH3545coVhND27dt3796t0Whg20bh536lg+AtXCAQuN3ujo6Od9999+OPP3a73du3bwenIzMzU6vVstlsr9eLEAoEAk1NTWfOnOnq6mpvb8/Ozs7Pz8/MzEQI0TRtNBrHxsaWlpZUKtW6hQAl5GCN4HK5Xq8XdoRAIPDJJ59MTk7K5fKjR49u2bIFAkTYoVglrgeiEAwGQ6HQtWvXTp48efLkyUAgUF9ff+zYsQMHDshkMtj7IZMJiWyJRAI7Tmtr6/nz52Uy2Z/92Z+x2Wx4E+wVDocTGa64XyTkYE3AYT6fzzc8PDwxMeF2u5OSkrZv367VahFCkFMGCVhlqwZl7na7h4aG3n///StXrvB4vKNHj/7N3/xNWlqaQqHALgZFUYFAAJIROp2uoaEhJyfn7NmzFy5c+OSTT7KzsyFdqdVqCwsLV4pYrB0JOVgTPB4PcMUQQq2trXNzcwih6urq1NRULpcLUSA+n08QBDzBKx0HVouiKOAgud3uV1999cUXXywoKIAgNI41wfMNB0QISSSSkpKSUCg0Pj7e2Nh46dKlZ555pri4ODc3d8+ePampqaBmEvbBw4VAIIDV5XK5IyMjdrsdIXTw4EGFQoEQguQQqOXIyOMy4KzE3NzcZ599ZjQaS0tLjxw5UlJSAsFEnHKEzwcCAbPZzGKxkpOTeTweh8MpLi6uqqpqamoym80ZGRnFxcWhUEitVoMsPsgFJuRgTQD7PBAIeL3e1NRUrVarVquzsrJw9BCnjuDxvSfAV3Q4HM3NzePj41Kp9NChQ4WFhRwOBysV+CGgtPT09DQ1NanV6i9/+cvl5eXYAggGgz6fjyTJnJwc+FYgEIAwV2T04v4ucH1fe9KAt2q/3/+tb32rpKREpVJt2bIFYgCYvf6FeT+SJC0WS3t7O8QKjxw5kpKSAsFKnHFeWFi4cOHChx9+ePv2ba/Xm5SUlJ+fv3XrVsyBAwvR6/WGQiGhUIi3gwT/4KHD6/VKpVKCIMRiMY/H279/PxASId2HEzwkSUbmF+4GLPPIyEgwGCwsLBSLxSRJQgAKG3oWi+XChQuLi4s7d+7s6uoCOxF+a3Jy8vr16zwer7CwMDMzEzwUkiSB+AruzPqQqGdaE0QiUSgUcrvdwWCQw+EAJwxIw+jzBJDVySBAZp+bm2MYRigUAjMdKCfwvxCHAOIh/GJxcbFer8epDa/Xy2KxJBLJxMTEZ5991t7e7vF40OezGOtAQh+sCSwWy+v1ArEMnDrQEPgDa1wDMAaBeQZEdZIksTIAQ5KmaZ/PNz4+brfblUrlnj17MjMzCYKYmpq6c+eO2+1WqVQajaazs/PKlSulpaUqlQoUxoNcYEIfrAlQO6BQKAiCcDqdJ0+ePHPmjN1up2k60iZYfYeGZZbJZCKRiMVijY+Pz8zMuFwu2GJwGQKPx4OQM0VRdXV1VVVVQqHQ5/O1trb+9re/nZqaggzk8PBwS0vLwMCA0+lcxnlZBxL6YE1gGAY/tQMDA2+++abRaKQo6sUXX4TwHwov8+oE4mAwCE6Hw+GYm5ubn5/Pzs4GIgkmnmi12meffTY5ORkcioKCArfbPTo62tjY2N3dnZGRsXXrVpqmJyYmbDYbRVEgi4n6xlgAiorAVqcoamZmZmJioqur67nnnos0CFYvJiEIgs/ng2MJH/P7/ZHPMUiJVCp96qmnqqqquFyuQqGw2+2ffPLJRx991NXVVVJS8o1vfKOqqurChQujo6NSqTQ1NRXqoh4kiIQS+8IaAcofoj0ikUgsFgMBJJJMhtbguUFQKD8/nyAIr9c7NDQEPAOEEOQU4IBisTgtLU0gEHR3d7/33nu/+c1vzp8/z+VyX3zxxS996UsKhWJhYWFxcTE7O7u6ulqhUJAkCXUs60ZCH6wJgUCAxWKBTwhaHSHE5/MxhwCwFvtAo9GUl5d3dHRYLJZPP/1069atSUlJ4INAPBEebqfT2dnZ+eMf/7i7u9vlcsnl8v379+/bt08gEJjNZoQQSZJFRUUVFRWR5uq6kZCDNYHH47lcLqAbeTwe8NQ7OzsXFhaysrLw1o5DPfeM6xEEwWazFQrF008/PTExcfLkyb6+vrfeemtmZiY5ObmioiIlJWVxcXFwcHBgYKC9vb2np2dhYcHn86WmpjY0NLz00ktFRUUIIT6fX1RU9Fd/9Vc7d+7Mzc2FPgrAfgC5xBFuhBCUPqKIVOcyajwgIQdrBehteAG3e3R0VCAQiEQioKujMM189RACl8stLCysra0dGRnp7e29cOFCS0tLVlZWcnJyMBicm5szGo0+n8/v9wcCAbFYvG/fvmeeeWbfvn0QRaBpOiUlpaGhoa+vb3Z29mc/+9nCwgJJkikpKaWlpeXl5UqlEkwQOFun08lms0GTgSDe04JJyMGaAGXFmEKiVCoRQhaL5cyZM88//7xWqxWJRGD0rbI1QBRIKBQmJycfOnSIYZjGxsa+vj6TydTd3c1ms6VSKSQagsEgRVFpaWmvvPLKnj17tm/fDhEnr9cLi+pyuSYnJ3/zm9/09PQQBCGRSKRSaUpKyiuvvPLCCy9Yrdbr16/Pzc1lZ2dXVFQkJSUB1x6i1/f0MBNysCZgugdCSKlUFhQU9Pb2+ny+t956Ky8v75lnnsG8NFhCoVB4z+OASc/hcPLy8p5//vna2lqj0Wi328fHx69du9bS0mIymXg8XkFBQX19fV1dXW1tLegYOCzoJMhKi8XiYDDodrsRQh6Px2AwKBQKoVA4MDDwxz/+8Q9/+IPD4UhOTs7Ozj5+/HhDQ4NWq4U4NEII6qwjBSIhB/cBCA9oNJqioiKJRLKwsDA0NDQ9PQ2xXoqiBAIB2Hr3/DpkkuA1SZJqtVqj0cAW4/P5nn766enpaZqmuVyuXC7PzMxMSUlhs9ngTLLZbJAt2Oblcnl9fb1IJGppaRkaGpqamuJwOA0NDZs3bx4aGuru7rbZbDwez2Qyzc3NJScnV1ZWJicng/eLwsnxhBzcNyIDRDKZLC8vT61Wz8/P0zQ9OTm5sLCg0WggLIi+iI+EOUuYWQpPeXFxcV5eHjzuwJGHFBSHw8EMWNzzIBgMSiSSffv27dixw2QymUwmsVickZEhk8nUanUwGFSpVDdu3JidncVf8Xq9TqdTKpVKpVKcrcCnmpCDNQGvH0KIIIjNmzcfPnyYz+fPzc2B1wd5BxSmt9/TX8AZapxWgGcd1oPFYoHJiRCCWjaGYYCkBCcAn2Sz2TweDzgHPB5PJBKpVCqIX0FuAliT9fX1FovF5XLB1+VyeU9Pz/Xr1zMzMw8dOgQhh4S/cN+AfR1KjkQiUU5OzvPPP79582aPx7N79+60tDSsb1cSAhSxL4AmYIWBn0vYIBBCwEyBtcefhLgh5q5xOBzgQ8B+BLKFOauQAYcvEgThdrtPnDjxf//3f4WFhTqdrqKiYpkFk5CDNQH3OYBeNQRBlJSUFBcXI4T8fj9wEhmGMRqNWq0W0pKrHG2ZAQEEFmAh8Pl8eBM3xsLGHXwyEAgEAgGoeIRcFHDm8Ifh+CAlCCEQLKFQaDQazWbztWvXDh06VFFRATsODkUn4sr3B6xLSZJks9lWqxU63ECEEW796lSUlQ7L5/Ohkgl6LEL6EahHPp/P5XJhewKHn/l8Pu6OA6w1oElCkZPdbgeJAcNFqVRKJBLosmM0GqGSGp9AQh88EJKTkxmG+e///u/Z2dlnn322srIS2qje10HAbgCtTlGU2WyGfcFut1MUBeEj0Ap+v9/hcHC5XKlU6vV6wbkAW4HP58OmA0oL9AreaCiKmpycNBqNSqUyOzsbGyIYCTl4UAwODv7iF78Ay7yyshKsv/tiA8CWPzw83Nvb29fXd/PmzZGREZvNJhKJXnrppT//8z9PT0/ncDgOh6OlpaW9vd3lcrFYrNTU1PLy8k2bNslkMgg9gTdI0zQEN0EyQCBomoZKh4qKitraWrlc7vF4sOighBw8IHw+340bN3w+n0AgGBsbs9lsarUaehat/SChUGh2dva//uu/Ll686HQ67XY7xA3lcjm26qEm+urVq7/97W8tFgtYiFwuNzU19eDBg9/85jfLysrAo2GxWGCdgExAySyHw3njjTeeeuopsVicnp5OUVSkEKCEHDwgeDxeZ2enwWAQCoUqlQqHFO+LMsowjMfjmZ2dHRkZQQiRJCmXyzMyMrZv3/6Vr3wFBIumaaFQmJGRodVq7XY7lEJTFDU3Nzc9PW21Wu12O9CXwWpxu91ms7m9vb23t9ftduv1+uPHj4OsgNeT2BeiCYPBMDAwAC5DbW2tTCaDrfq+DsIwjEAgOHDgQE5Ojkwm0+l0+fn5OTk5UNmOKydVKtWRI0e0Wm13d3dXV1dfX5/FYsGVzlAMT9N0c3Pzm2++2d3d7fV6jUaj0+lECCkUimAw+PWvfz01NRXbpJHnkJCD9YNhmLfffntubo7FYhUUFBw4cICiqKmpKeiLvHaw2ezs7Ow33ngDfEKCIKRSKWSVgLUMCpxhGJ1Ol5KScvDgQZfLNT09DY4Jm83W6XTgQYRCoaWlpYGBgf7+fiiJgbgTxKqVSiWHw3G73XcXxSbkYE2AiCy8ttlsAoEAojoLCwvz8/NFRUU/+MEPoL5Rr9dDK817HgfcQkhOAkcNsthAT13maOCOCwB4DYEBPp+flJR0dwDb5XKlpKQcPnxYLBbPzs5yuVy1Wr1nz56ampq8vDyQJ+igsyz7nOiXtiZASB8oHpDCB+7J5cuXT5w4kZGR8dprr2k0GjDrIoPQy4C7ovh8vra2tqGhoZSUlOrqapVKdc/Pr5SqWKXFApTOGY1G8AhAtXC5XJlMtorVktAHa8KyGlZIB7BYrLq6uqSkJLVanZqaisINV1fhoQCblKZpq9X63nvvdXV1bd68OS8vbyU5uC/4/X7o1CGXy+Vy+T0/g2ttE/mFdQIWHvhCfD4/IyNDKBRyOJySkhLQ53gOxyoHwWWsN27cgHZr+fn5kER4cOBmOeBfUBQFyh9qpSHAAGd490km5GBNgO6YU1NTP//5z5uamsrKyl555ZXt27fD84cQAkcODLdVSt9ROEdw4cKFiYkJDodTWloKLdAeHLBnwetlndtgP4Jc1D0lNSEHawK0R+zs7HznnXfm5+eBC4Qi9mlI2+Bq13seBFwAPp/vcrm6u7udTmdWVtbmzZuhi8WDnyQYMTjHGPm7eMPC7+Oe4fBnQg7WBIIgxsbGGhsbFxcX1Wr1U089BclGvH6YxYpWlgNQ0X6/v6Ojw2Aw8Pn8iooK6M4dFUTqAwBIAE5Cwp+gG+CdhBzcH2iavnLlysWLF0mSPHz4cENDg1wuB/9eLBajsGEPe/AqeSaSJM1mM4SioUt7VKoPIoGXGdfkw/uRzWATfOUvAPAAEEKwlkDzJUnyhz/84dtvvz08PFxeXn78+HFopRwKhUAIUDjjjOmscLvtdrtcLsc8Y6huUCgUNTU1JpNp586dDQ0NmFF+X+e5yufvLoBf1vb9nt9KyMHnADQeHAAANQ6JvunpaRaLtX37digmWb2eEPbpSH8dJ4V5PF5lZSWPx8vNzYVeFg//sr4YCTm4B8DvgpVzOp0DAwOXL1/2er3FxcX79u3Lz89HCAWDwVX0P26ZD3+CVAUCAYqiFhcXU1NTs7KyQNNg4y4mV7YiEnLwOcBGAIwPkANI3hQUFCgUigMHDlRXV6/lOETEmFWgJVIUdf369R/96Ed2u/31118/fvw4DOO6X9LKQ0JCDj4HvHI4QQDzNL/3ve/l5OQUFBSAQQAfW4V6hBub4XeWlpYuXrzY1NQE4zQgQbwRNAEgIQefA94OgPYPG3xqampdXR0O/bpcLoFAwOVyV4kD4uwR/MkwjMFg6OzsTEpKgib6YB5CUSwKWw+PEAk5+Bwg/orCnjdFUeACwGQ0hBD0xcf08JWOg1OICCFIJUOmeHp6WqlULi0tLS0tQR+FRy4BgIQcfA7QMZsJ96CDJscgBzRNAykIPrn6/FRIKAOZ3e/3QxcVn88HzoJerxeJRJi8hO5issce0eStu1yuKB4tBoBYG3A98JsGgwHMeI/H8+///u8//elPccYZOAc4Vr/S4jHhSb/4V3p6ev7xH/9xampKIBDU19fn5eUBJx3dlfd7VIimPli9eGNDIdKYRxHRFYZhNBoNwzBWq/UHP/jB2bNnFxYW+Hz+d7/73bUfHNpt0jTt9Xp5PB6bzV5YWHA6nUql8siRI9CiHcd0mXB3rYdwlfeBaP78I7+YtQMeceauOVrQcsZoNL777ru/+MUvRkZGMjIySktL1/EToVAI5iYwDHPt2rWBgQE2m/3CCy+Ul5dD3TETns2yEfTBY7Ny0QXua7QsCqtSqZxOp8VieffddymKkslkL774YklJyTqODwYE7C8TExMSieTAgQPFxcVisRg2DtiMHrz1YVQQzX0BCmvWUdX1qLBsb4ZHc2xsrKmpaWBgQCaTPfPMM7W1tevQcwRBQFGD3W7ncrn19fXbt28/duyYTCZD4f54D9IOOeqIphxgDvXGx92NosBaZLFYHR0dP/3pT10ul0gkeuGFF8rKyoDid78/AcpfJpMRBPH666/b7XbogAQGAVBC4I5thP00mmfA4XDw0JINjmW0HFwXNjg4eP369bGxMT6fv2XLlpycHChwXsdPgF6kKGpsbIzL5SYnJzscDuCqRJIVHnxEd1QQTTmAjrFRPODDAxmeqw0Am9HpdP7zP//zO++8w+Fw9Hr9X/zFX6SlpbHZ7HX4w1BK5nK5rl+//stf/nJmZgaqlFBY5rCRGL1rejAw0QPmumx8QDEocM+ZcOf75557Dppg19XVffDBB06nMxAIQMH56ofy+/3L3qQoyuPx/MM//MO+ffsyMjLGxsbu/syGQjT1wUbwf9YIaCqDwm0iYEyKxWKhKEqn0x04cKCmpgbKSFYidgIYhkGfjyqCbJEkOTExceXKlba2Noqi3G73Bokfr4Qo24nMqtMLNw6gJa7X64XKXzhzmJa0efPmuro6mMYXCoVWL1aETmZwydgXZRjGYDB8+umnt2/fpihq27ZtYGRA96vYXOD9IspysBFCY2sBE+4iBr4Ai8WSy+Xf+MY3oOMV7kUL1tzqF4U5JsA9gZ4mZrO5o6PD5XIlJyfX19dDKyufz7dh5SDKa7YRQiJrAdBMhEKhzWabmJiAhvpKpRKEAH1+j4OS4XsCXy9N05hMEAwGx8fHh4aGCILQaDQFBQXQwijqlNQoIsr2weNiIvD5fBhl8Z//+Z9///d/PzAwABoi0t+B6mOEEAR/7onIxAQIEJQr/elPf+rv7+fxeLW1tcXFxTweD+yGh3xZ68djoMMfBhiG6ejo+NWvfvXWW2+dPHlyfHwcOihDG2NAIBDw+XzMqq4dXlrcn8zhcIyPj1+5csXv92u12rq6OihTcTqdDzgi4aEimnKASyY2JvCKwnSD3//+93/6059sNptcLoceY/C/MCaLIAiRSCSRSEDhr3RM/F84deR2uw0GAySZMjIyUlJSgHG0jL680RBNO3EDGgcQtYUVgrYEBEGYTKbbt28PDw/PzMyIRKLvfve7BQUFwBaEKoPIBVt98XANPL725ORkpVKp1WpJkmxoaCgtLYUiOPh3A94iQJT9hY1mH0DHOcj6EOEZ22NjY2+99dbVq1dZLFZlZWVtbW1ubi72Ee73+FBZLBQKmTClsbKy8sc//rHD4SgoKIBmZvjDUb686CHO5QCFKeS4Y/3w8PCHH3545swZkiQrKipefvnliooKoJWC43dfB4e+hyAE4H/SNM3hcPbu3QslreiLKl42CKJ8fhtQFHA3OfhzcHDw3LlzCKEDBw5885vf3LlzJ3CH0LpIwx6PB7xBiqKI8ChWGLcIXUwjUwn3208vloh/fYDVMvSM4XK5SUlJmZmZzz//PIxphoZF0Aj/ftdJKpViJoHf75+enp6fn6+pqcH0QyZMeQWa64YlZ0RTDjYI5XIZYPYIJBhJkiwpKXnllVd0Ot22bdv4fD5MTYdPOp3OldrJrAKHwwEtq6anp//nf/6nu7v7+9//fm1tLQrPZsGBqQ0rBCi6crABhQAhhEkfEPpNT09/5plnkpKScNkaziCsIyLOMAzkq4aGhk6ePPnRRx8tLi729fVVV1dzuVzIMaJwGHsjWwlxHkdiwp0AmIj5qTA7BXrOQntZCAOsI+4LI9U8Hs+JEyfefffdpaUlCCRDOIHD4YAOYD7PZN+A2LgSel9YyeXD4zFg+iKKUFqRgYF1P6nwoI+Pj/f09IyMjLDZ7KNHj0KnQhxpBhEEB3JjqkwUN3KwCjgcDsxilkgkMDs9iovh8XhYLJbdbh8eHuZwOAqFYuvWrRs5n7QS4l8OrFbrxx9/fO7cOblcnp6eLpfLg8FgtPK/CoUC9heLxcLj8YqKiqqrq6PV/yyWiHM5YBhmdHT0zJkzzc3NeXl5brcbp5GiohXwFN+amprp6em9e/dCI5wNq/9XQpzLgdPpvHXrVm9vL0mSeXl5UqmUCA/cjAqg8nXr1q0/+tGPWltb9+/fr1KpHosA4jI8Zqd7v2hra2tsbHQ4HHl5efX19XK5PLpPKh6WlZ2d7fP51Go1ZKtx/6zHBXEuB2fPnm1ubkYIFRQU1NTUgD6Iot622+39/f1cLresrCwtLQ1HDx87xE/8IJJeAC8WFhbu3LljNptVKtWWLVuys7Mh74wiqBLwL/COILAI1kPkYeF9zCKJjD+eOXPmJz/5yZUrV2w2G8QhIP0YkyuOJuJEDnD5MEEQMJGCYRhYHoSQTqfbu3cvzDuAz8PUIoZhYM1gsBUmHEeCCRfrgawwDAMCEQgEuru7f/e7350+fdpkMkF3NAhVgWt6T8Tshtwv4kQOUERUGNaDoqilpSWLxUKSZHFxcXp6Om6IDZ+BgsbIbCT0JFi2YLgeGcLPkFdECBmNxgsXLvT09CgUiqysLOhpDmTlWF95NBAnchCp0mE5A4GA3+93uVxarbagoAAsA8iEQeJRIBDACxTunrqMf4bdS2An4M65YAEMDw9fvHjRarXW1NRs2bIFF8ot63H9uCBO7ETcwg7vDhwOJy0traKiIjs7u7KyEnq1wJMNzQkg+YQrFLxe7zITj4lomILlAH7FYrG0tLQMDQ3xeLy6urri4mJsfm7YCoXVESdyAP3u8GJAGnDLli1SqVSn0+n1ejw4HYUbmEEpKpfLNZvNPT09Ho+ntLRUq9Xi+iQUYXtCs3JQNgzD3Lx58/LlyzabLT09vaSkRKlUwiRe+OTjUswTiTiRA9DGmJUK5LDc3FydTieVSmEUTmSXW3gHmuBdunTp17/+tdPpfO6551599VXcyQzvGihCKyCE/H7/7du3BwcHCYKoqqrS6XQonKmCX4EZXI/kPqwbcSIH8LjDRBSQA5IkYUXhAYX2d7C0MLsOWuFZrdYzZ85cvnyZoiiVSvXlL38ZBt2hcFkOKBh4xOEp93g8Ho+HYRiJRHLkyBGYzITCvdrXx3d95IgTOcAGf+SfsISwlnhwEVQ6QwsfhmGampp6enpgXObAwMD8/Dwoefx8Y3YC3nFompbL5Zs3bxYIBHV1dVAhCbJChEfrPar7sG7EiRwAsDbGxhrOKmEqACgGmUxmMBj6+vo+/PBDm82m0+lcLtfk5GRTU1NRUREEErAygK8ArQ0a82/atEmpVGZlZaWnp2PGEQxahxeP6g6sG4+ZOXO/ADsACs4hEgDDMBiGGR8f//nPf97c3AztUgsLCzkczo0bN0wmE9DPUVieYKPBZqZEItm2bVt9fX1VVdWjvLaoIs7lACEEPZJRxHhDNps9MzPT1tbW0tICPYtgXopKpRofH/f5fCRJArUQogLgVoB5AQeRy+Uqlepx1P8rIc7lgAlPYAVHEXS4wWD44IMPPv74Yy6Xq9FooJHR8PCwUCh0u90WiwV/F4XpzvAOhBlwAuJxtAdXQpzLAQrrdogokCQ5NTX14Ycfvv32262trRKJBCHkdDpZLNbU1JTBYDCbzS0tLUAuguWHaZiQhmDCbZXB83zsggSrIH6u5J6AqDBs9nw+f2lp6eTJk7/5zW/Gx8fT09N1Op3ZbDYajWlpafn5+Xa73W63nzlz5vbt29gaAEcDdhbcSh9cxMcxfrwS4lwOgmEghGiabm5uPnHiRG9vr16v/+53v1tfXw9JyE2bNr3++utZWVlcLvfWrVs9PT1utxscS8xAR+FwNT7sI762qCLO5QCFO5WA+0dRVHp6em1t7euvv/7Vr361tLQUpqzk5+cfOHDg+PHjMpnM6/V2d3dPT08z4eHIKKItOw4eR8aaHqP88kqIq/jB3WCxWLiyjM1ml5eXazSaQCBQXl7O4/FGR0ftdnsgENDpdKmpqQ0NDY2NjSaTqaWlZXBwcNOmTQghmMWwLCSwejO9xxFxLgcIIcg7gErPyMhITU2FSnWDwdDT02O1WhFCEAIqLS19+umnnU4ncE/gsYZquMcxNHRfiH85gAcXFhU2CDzpGIIHCCFodSmXy1977TWJRAIKA8JHjyP5eB2I8yuMtPZRxAbPMIzJZJqamnK5XGlpaTk5ORwOx+Px6PX6F154gcViabVa6I4PEaRHeQ0xQVxtcncD55kwe4DD4bDZ7EAgsLCwYDQaXS5Xfn6+VquFiWyhUCgtLS09PZ3FYvl8PuiLCb134xvxLwfASAAmceRMPqvVCs96Xl6ew+HATDXsGqAwq2CDlypHBXEuB7gtTeTgDeiKMj8/b7fbCYKorKyERCV2L+EreFLnY0cqWQfi3D6IrGbEnh5BEG63u7293Wg0BoPBzZs3p6Sk4GQBtNNCCLHZ7EgWa3wjzvUBEa5rQBFpIVAMVqsVKh3AYsAUNOwdEBtjglZsEOdygFbo1oM71shkMqAvx1lc6H4R5xe/LNCLU8Z9fX1Go5FhmPz8fKVSCX5BPOWR7xfxLwd3v8kwzJ07d4xGI0EQRUVFCoUCLMTHtBQpKoh/ObhbH8CcDKhigCJloBc8jvmhaCHO5eBugPIHWhFBEElJSTCI+XFsYhJFPClygKOKCCGGYWw2GxDOFAoFMFch1vSoT/ORIc7jBwDodow3iLm5uZ6eHrFYTJJkZmYmFC+gJ3tfeCLkAIeKGYbx+/29vb0zMzNerzctLU2pVOIQ05PsOsb/lUMhGySREUIURXV1dblcLpvNBnwkj8cDZJMnWR/EvxyAX4DCOWgulzs5OQl/lpeXK5VKSCI8ycYBehLkAAcG4F+KogwGA6x6RkYG8NDR56ubn0DEvxzgQjaEEMMwMzMzc3NzXq+Xy+VKJBJsQkIo6VGf7CND/MsBPOgMw3C5XI/HMz4+bjKZgsFgTk4OkJUjmceP+mQfGeJcDoBMAOEBKGixWCw0TYtEouLiYq1Wy+fzSZKMnMbxZCLO5QCiQ7gpjlAo/Pjjj51Op8/nO3DgAExfiZzV/cQizi8e24DwZyAQsFgsgUCApmmZTAajGqH1IULoSeAhroQ4lwPMTgY70Wq1+v1+aIecnJyM2+jB/z7JW0OcywEKd0nFEWWn0xkKhWpqanJzcyF8BNO0EEIbeY7Ww0acywHwVPHePzQ0ZLPZGIbJy8uTyWS41Ak0QcJfiFtAJz0UzjHeunXLZrNxOBwejwdWAvCYORzOk0xGQnEvB7gZisfjmZ+f7+np8Xq9SUlJycnJfD4f97R6cvioKyH+5QC0vdfrNRqNk5OTNE0rFAq9Xi8UCqHbNkLoCU8yobiXAyAawdr//ve/NxqNQqGwoaGhpKQkcrD3k1DJujriXA5g8IbP58P/crlcoVCIi1UAT7gyQHEvB7gyCaLLwWBQo9GUlJTgmcuP+gQ3CuJcDtxuN8SVoSUiTdNJSUkgBwkhiEScywGXy8Ud2FUqlUajyczMhM1iWYIRxxyfTMS5fcThcKBpNkEQhw8f1uv1er1erVbjiHLkh59k6joR9w+Bx+OBfBJElMFIhEz0svqWx7RFdlQQ5/oAWp2BVSgUCkENABnpbmUQ94/EKnjE+gCGpkGn2mX/taymALJBMBMNhVlG0MQqMoMQeWQYtQAvIHgMfbOfkNZX94UNsS9A0g8vPHCHcPsSn8/n9/sFAgGXy/X5fC6Xi8fj4YcbjmC322GlQT7wNMXIX/F6vTDp/TEdpfVQsSHkgKZpsObwYwpPMMxQg5wQi8WyWCwikQjPZAUmgUAguPvhhqF98NxDo/1YX9Ljhkd8g4A/CKQg/CYTHqGKd4GxsbHbt29funSpt7fX4XAIBAKhUBgMBhUKxebNm3Nzc2Uymd/v9/v9Uqk0Ozs7OzsbBjaicE9sPKIvgXviEesDqDHCw5Ag3wOzMtlsttfrXVpaamlpOXny5ODg4OzsLGzwwB9xuVzBYDAjIyMrKwsh5HK5XC4Xm83OzMzcsWPHrl27iouLVSoVzjt7PJ5QKCQSiZ5wKuI98YjlAAggsK7AF8UyMT093dTU9Nlnn7W1tRkMBhiqBDXqMplMqVQCFT01NVUul9+5c4fD4UgkEqvVOjk56fP5srKyiouLCwsLKyoqamtrRSIRQsjr9bJYrIR9cDcevb+AwrMvEULwuFut1o6OjjNnznR3dw8PD5MkWVJSAp9MSkqy2+0ej0cgEID0+Hw+s9lst9szMzPz8/MDgUBfX9/g4GAgEJDJZAzDFBcXP/XUU/v379+0aRNsFpGzHBMAbBR9ALG8YDA4Pj7e0tLyhz/84caNG1lZWRqNJikpSa/X37lzZ2lpic1mj42NGQwGLperVCrlcrnX652dnWWxWHK5HJpeWSwWi8UCciMQCKAlVk1NzTe/+c2jR4/CWL6ErbAMG8U+8Pl8wWDQaDSeOHHiV7/61czMDIfDUalURUVFEolkfHx8YmKCxWLV1dVptdq7j0NRVFpamsViuXDhgslkKisr4/F4HR0dFovF5XKBKZqTk1NdXX306NG6ujqZTDY/Py8SiYClCAfxeDwwBvoJxKP3G6GxPYfDCQQC77333g9/+EOz2UxRlMPh4PF4aWlpWq1WoVAUFBTU1NSUlpaKxeK7D0IQhFgsdrvdExMTME8BhrK1trZ2dXU1NzdPT08Hg0GRSLRt27aysrK//Mu/zMvLg97JBoNBrVbz+Xyv1/vEUpYfsRxAzTmHwzEYDG1tbW+++WZjYyNMx83Lyzt48GBdXV1GRgbUpKrV6lVam0J4cVlokqKowcHBy5cvnzt37saNG263GyGUmpr61a9+9cUXX9y2bduykd6JPNOjAZQQGY3Gt99++6OPPpqenoZZaV/60pcaGhoqKyvT0tI4HA5s9iRJ4srlZSBJEnYWCCtBV22YqgYk1Y6OjlOnTp07d250dJSmaa1WW19f/9RTTx0+fFihUBAEYTKZkpKSnlg5+P9TbY8KCwsLP/nJTwoKChBCJElmZWX97d/+bXt7u9PpDAaDfr/fZrM5nU7ogXtfCIVCEGNgGCYYDHZ3d//Lv/xLeXk5xKYkEklxcfE//dM/TU9P+/1+i8XyEC7uscGjd5/m5+e7u7sNBgNCSCqVVlVVHT9+fNOmTUAhiUwHwIre85GFnAI00MbBIpqmIewIDsKWLVsyMzMzMzPPnj174sQJp9PZ39/PMExWVtarr76qUChietkbDI9YDmZnZ9va2sbHxymKkkqle/fuffHFF/V6PUxG8Pl8kFmA+RmrkAOY8GYBhh7s+uAcstls6JKnUCjkcvmxY8fKysq8Xm97e/vi4uLs7GxjY2Nubu7OnTuhH39MrnvD4RHLwfj4+KlTp1pbW7lcbllZWUNDQ01NDbSnYBiGx+Ph2QeBQGCVFkYkSWKJwR/m8XhQuOj1ekdHR00mk0wmy83N1ev13//+9//1X//1o48+cjqdJ06ccLlcFEXV1tbG5KI3ImIkB2Df4b4k8GJ6evrUqVOdnZ2BQEClUtXX14Nnj+7VnQQebswj8nq9sGvAax6PF/koczgc6IP061//uru72+l0zs7OWq1WtVq9adOmY8eOHTt27I033khOTn7rrbf8fv/FixcdDsebb76Zk5MDeojP58NJslgsu90OZxXHiJEcgBDgnuagtx0Oh9FohHnsOp0uJydHKpXCA72SHYDdPND/kJfCTj9FURBp7uvrO3Xq1GeffeZ2u00mE4fDsdlsNE3Pzc319fUNDQ2x2eyysrIXXnjB5/O9//77Pp9vbm7u/Pnzb7zxBuYv4Zj3kxB8jJEcQH0ZwzBgvjEM43a7W1paurq6cJeazZs3y+VyyDWs4r9RFEWSJBzQ7XbD6EWQM4vF0tbWdvr06WvXrs3NzSGE/H4/mJB4hCNFUdPT0//2b//2xz/+sbq62mAwXLhwAWZ2Xb169ejRo5mZmVgW4RcTchBNgLXPYrGAc+B0OoeHh2dnZxmGEYvFer1ep9N9IU00FAaQkQQCAQSODAZDe3v7mTNnrl69Oj4+DuEpSFvodLqGhobCwkKxWDw/P//+++8PDg4uLS1Zrdb09PT8/HyNRrOwsOByucbHx3t6etRqNQgWzn49CUGF2MlBpH0AD7REIhEKhRRFKZXK9PR0sViM7/sqt57H44VCoUAgACxkhJDNZvvlL3/Z2NjY1dUFEUMOh8Plcjkczle+8pUtW7YcOnQoPT2dx+MNDw/39/ePjo5yuVz4ZE5Ozt69e/v7+/1+/+TkZGtr69atW3U6HcgBbqcSo3v06BA7OeByuVgUCIKw2Ww2mw0e2dTUVJ1OhyK25JXkAOwDsDNgo5menm5raztx4kRfXx9N0ywWS6FQZGVlVVZWVlZWPv3002KxWCgU2u12mqY1Gk15efmdO3cMBkN3d3dpaalUKj1+/HhTU1NHR4fVar1z547T6USfDzM/CbyVmPqNBEGAR8cwzOTk5PDwMFCPYMw2ChMR1vL8gSk3Ojp65syZc+fO0TTN4/EYhikrKzt69Oju3bsLCgqSk5Pdbjd8ElqjIYRkMpnP57PZbC0tLc8++yyXy62srNy8eXNPT4/f74dhPShMeAdpexKKGmIkB1BbKBKJgmHYbDafzycUCgOBQHJyMhDI1rITY4/R5/Pdvn377NmzLS0tHo9HrVa//PLLr7zySkVFBVSqwNYDu4zRaFQqlZBxIEmSx+PZ7XaRSOTz+aRSqVqtFolENE3jSnjQTGCIPPS7swEQIzkA/x4KCthstsViMRqNMpmsoKDA6XQmJSVB9plhmC80zv1+P0SLm5ubf/nLX/b29lIUJRQKX3vttW9/+9ugV6AsApSNzWYTi8UymYwkSYvFotVqIeiUlpY2PT1dVFR0586dqakpCENVV1fbbDY4YWjQ/YSQl2J6hdgf8/v9UE0gEonEYnFaWppYLMbqF0jrK2lj+KTJZOro6JicnDSbzSwW62tf+9rTTz+dnJyMC5jAFunq6rp9+zaHw9m3b59Wq5XJZFNTU3a73e/3u91ugUBgsVjOnj3b2NjocrmA3ZqbmwtqCSSSpmmwSWN1kx4NYhdHwqEhyCKCa+dwOCiKcrvdEFRAX2Scg7anaXpkZASCBMFgsLy8/JlnntmyZYtQKMQhiu7u7q6uro8++qi3t5fL5aakpKjV6mAwODo6iptjMAzT29t74cIFMAs2bdq0bds2iGpTFAVcByiYT8hB1IAtcNjdWSyWx+NZXFykadrlcoH9CCbCKjcdtLTT6Wxra+vv76coSiaTfelLXyopKYGB7bCdm83mxsbGd955Z3Z21ul0pqamguSdPXv2o48+mpqaAnKzx+Pp7u6emJjA0oNDk36/H4LWq59P3CBGRhBY3dgNAyGYmZmx2WxKpTIlJQX4I8A0wTVud4PL5QaDQZPJdPPmTZPJxGazd+/evX///szMTLAcoWO2zWabmZmZnp52uVxcLvfIkSOg7S9fvjw/Pw9RxczMTL/fPzAwYLfbYSsxGAzQTwmFOS8onNGOzV16hIj1FcIGEQgEXC7XwsICwzACgUAqleKHb1lF+t0IBAKjo6NDQ0Ner1cul2/fvj01NRWMCah+IUnSarWaTCaEUGVlpV6vf/311/V6/cTExMDAAEmSfD6fpumioiKz2Tw6Ourz+WialsvlKSkpuA6az+eDEwsxiZjdn0eFWMcPgJwOfoFQKPT7/dC7CkX0vFwFDMMAyQzoQzqdrqKiAsjpXC4Xt02XSCRlZWUEQXz729/OyMjQ6XQ+n+/tt9+GyUwIobS0tKysrPPnz4+MjKhUqoWFhaKioqNHj0okEnyq6MmIIAFiJAfgFuKJF2w2WywWa7Var9erVCplMhkkoxFCuMfpPY/j8/msVitYBiwWKzs7Oy8vTyAQQGd9XC2Zl5f3rW99i8fjCQQCYKd1dnb+6U9/CgQCcrmczWaXl5dLJJL29naTyVRaWhoIBLZv375//37YAqDVKpiTq5Nf4ib1ECN5B40N1QqhUMjj8Xg8HoVCkZaWxuPxvF4v5IUZhgF62UqUE4FAYDAYPB4PfACbBZBuZrPZUOnM5XJxCgrykL/+9a8nJye9Xi9UPn3nO9/p6emZmZnZuXMnOBQNDQ0+nw+C3xwOB3QMlNrhPuyRZwX+5MO/czFCTPUetv64XK5UKuXz+UKhUCaTCYVCsBMxbXKVg6Snp6ekpMAi9fT0dHZ2woYCygY8EVhLFotFUdTvf//7733ve1evXgVuUkpKSkNDQ1VVlUAgwDFNSExLpVLQBKBXYKNBCFksFhQuvYL/BbclnkhssZMDhmHgJrJYLKlUmpqaCmVoXq8XyKX4k6vkmUKhkE6n27lzZ1JSEovFam1tPXXqlMPhAOsSVoimadg1gsHgZ5999rvf/e706dOLi4tAdKupqfnKV77CYrGcTidFUXw+H6pjW1tb79y5Y7fbIYzo9/udTqff70cIqVQqcCzBrYDc2BrzII8LYmcnQuQA9lShUAhjMObm5iwWy/j4eHFxMfStQataZ/DoFxcXFxQUOBwOq9U6NDR09erVnTt3Qhc00CsURdnt9ra2tp/+9KdNTU00TUulUh6Pt2vXrldeeSUrKwt0j8fjsVqtHA7H7/f/7//+7zvvvFNTU7N58+aqqqrc3FyFQgE6hmEYHFaCfDSonEAgEDcqIXZyADke/NyzWCyz2Tw5Ocnn82dnZ2maBkFZ3fKCPnhJSUk5OTm3bt1iGGZmZuZnP/vZqVOniouLk5OTq6urs7OzJycne3t7T5061dzcTBCEVqvdt29fdXX1nj17CgoKfD4fh8OBtNPk5GRaWtr27dstFsvQ0ND8/Pwnn3yi0+kqKyuPHDmye/duPp8Ppw3GDVgM0IAnboQAxVgfEOGhacAt83q9UKwC/W9gM2ZWrS8DhZyVlbV79+4rV65YLJb5+fnZ2VkwADkczvXr1yG3NDs7Oz09nZGRkZ2dvWXLli9/+cvFxcVgOcKTXVhYuHv37vb29vHxcQgS5OTkwCbV29vb29vb1tZ28ODBvXv3ZmVl5eTkgBcDAhF/EcbY8ZVhC///qmfYbJVKlZKSwufzITe4xjpDiqLgv3bu3PnSSy/duHGjtbXV4XBs2bIFWuPcunVrcHAQquJ37Njx1FNP7dy5U6PRpKenQxUlbBCBQCA3N/f111/Py8trbm52OBxQ/myz2TQajVarBfUwMzNz8eLF1NTU73znOyUlJRBooigKdrd4ykrHTg7AxgaDiyTJpKQk2IPNZjNOOsOHVyelURTl9/s1Gs0bb7yxf//+//iP/2hra7t27RqPx8vKyqIoKjk5uaysbNeuXc8++6xUKlWpVBRFwa8rlUpwDSCWVV1dXV1dDZzmxsZGg8Fw+vRpKL+HiV5+v9/j8QwPD7vd7sOHDx87dkyv10dybmNz92KAGMkBSAAQAsDUgm7HsE3YbDaHwyESidhsNphgq0Rv8K6clJQkEAj+7u/+rrOz89NPP4XKuMrKym3btlVWVubm5uJwNS6GgYNDaJkgCEgtyuVylUqVk5ND0/Szzz57/vz5a9euTUxMWCwWNpstEokoirp+/fri4mIoFPrrv/5rCC5Bgjtu4kgxjSvDGuABGLh+eXZ2dmRkRCgUSqXSNXZCB+UhFAo3bdqUlpZ28OBBiChwuVyFQqFQKLBvcs+vY8YzQgh+EfREZmbmq6+++txzzw0MDJw+fbqrq8toNEIMe3Jy8ubNm83NzeXl5fHXiy+meWdM/QOBgOceJuuy2WyhUAjP+irrF/lfUJLA5XLVajX+AGYYQ3nr3f1zI08G/xcuiIN+KAzDFBQU5Obm9vX1Xbt27ezZs2az2ePxdHV1nTx5Mj8/H896i5sUVEzjSExEx1SwsyCClJycrFarxWIxPJrgFNzzIKBLUDiRDWYH9FqDICCO8IBfsArveRX5AGOivLz861//+ne/+91vfOMbarWaIIjx8XEoeoGIMkSZ4gOxjiOh8CZN07RYLE5OTiYIQq/XQ088HLBbZWuIrHG423/DfHb4wEohv2UmHpZRUCFAc/V6vUKhEGhON2/e9Hq9Vqt1ZGRkYGAgLy8vzvrzxk4OIBqDO5sQBJGbm/vss89KJJKqqipQBuiLKMKgAyD8gHdozFdgwsN3UJjt8oVndXdGAw+HB7eCzWZnZWV97Wtfk8lkZ86cCQQCN2/erKqqksvlcWMkoljuC2CLgSYHR3HTpk0NDQ16vX5qaqq3t9flckGcZ5W4PSYLwbYCPmRkj25okwklU2uf10yEO3tD9hK+KJFIcC9WXJBPEMT169ehG1civ3DfwEWJTHiiNsMwMpnM5XKdPn16aGho165dWq1WKpWuntSHqD5ufASaH5dRgyaYn593OBxggSqVSiwWKJyewMfHlsSyd/BvQVqBzWYnJSVBH8ZQKDQ6Ogpjn+LJZYjRlUDJANQvEARBUZTNZhsaGvroo48uXbpEEIRUKo2sJFlJpYO2x8VxeP4mWHYLCwsGg+F3v/tde3u7VqvdunVrenq6RqPJycmB6lWfzwcmCKwi6AyobMeEOYZhoGEbSBIoMIfDcePGDbFYTJJkWlpadnY2kNviJpQUO946CuvzQCAwNTV15cqVTz/9tKWlxefz7d69u6ysTCwWg4G2ynFg2SJLjgCgHi5cuHDu3Lnbt28vLi52dXXdunULahq3bNlSWVkJBe1AWoEiKp1OhwnK4GrC0+/z+RYWFkQikUajCYVCExMTTU1N8/PzsOnodDqgr8VTliF2mg3umtfrNRgMnZ2d586du3btms/nA0JAeXk5+O6rk1QjlTYcE7QCKIa5ubmurq6lpSUoiA4EAtA/cWRkpLGxEWrcQM6EQqFGo9HpdFKpFPYsGPQQCoUUCoXRaBwZGVEqlVu3bnW5XNDBaXR0FDREWVmZWq3G479ice8ePmIkB2DK+f3+3t7ea9euXbp06ebNmz6fr6qq6mtf+9qBAwegdyG23lfSt2BhRHbrdzgci4uLsPGXlZU9//zzt27dGh4eNplMDodDrVYDjR3oqQzDSCQSqVQ6NTU1Pj4ukUiAiAZGBpvNdrvdCoXC7XYvLS3J5fKxsTGbzdbb2wvSBm7k4cOHoa9zPMWVY9dHExTshx9++MEHH/T29pIkWVVV9fLLLz/11FNarRb7/bj/5UrHwe4cwzBms7mlpaWpqclgMLDZ7K9+9auFhYX9/f1XrlwZGRkZGhrC5dVQwAR9GMEpgBeQXJBKpZDpMBqN2OwQi8UCgcDlchkMhqWlpbS0NOjk9fWvf53P58dZ06QY6QO4xd3d3R0dHRMTEzRNl5WVPffccwcOHFCr1Tjsg8L7wipeA/ifBEEYjcaLFy/+8Y9/bGtrs1qtIpGorq5u165ddXV1OTk5RqNxaGjI4XCATxgIBObm5sbHx81mM9RVmkwmo9EYuSkEg8GhoSFgq2o0GqFQSNM0zHJRKpWHDh06cuRITU0NzpXH5tbFBjGSA6vVevXq1RMnTty4ccNut2u12pqamqqqKtDbMD4L7iyY7isdBzw34LDcuXPn9OnT169fdzqdQDqCowkEgtzc3IyMjIKCAtw6KRAI2O12i8VCURTQmqenp0dGRsxmM8QloerSbDYzDAOdNNRqtc1m6+npMRqN9fX1zz333I4dO2QyGQQ/xGLx6i7u44WHIgdYyaNw74uxsbELFy40NzcvLi5KpdItW7bU1dXl5uZyuVzYCAiCWEZNw4VNOPYAqhshFAgE+vv7P/nkk46ODiCZkSRZVFQE/WzApyAIQqlUorBbIRaL5XJ5eno6eJ40TZeWlkLXXfBR/X6/z+err6/n8/lyuVyj0YhEIoPBcPPmzVu3bh06dKimpgaMykAgACbt6v28Hi9EXw6wwsQ5m+np6WvXrt26dQvam+l0ur1791ZWVkokEtDJ8PllbhiYfhAtgMpznJqamJj4wx/+8P7771ssFtDeZWVlBw4cSElJkUgkUAcBewFwCfExcVgCWmTg6iWM9PR0cA7hd2UyWVpa2tNPP52SkoLC8g06BsVX/6woy0Fk3BCM8MXFxc8+++zy5cuBQAAiBLW1tYcPH9ZoNF/oIuLbjcd183i85ubm9957r6WlxWq1wlJlZ2e//PLLO3fuFIlEEAaAAPM6/PvI4Q6w5FBZu7678RjhoewLRLiIMRQKwbitiYkJeLOiouLw4cMZGRnYKrznETB9Db+G/cVsNre1tV26dGlqaorP5+v1+n379tXU1OzduzcpKQnkD5cYrHL8VYCT1wghOAcct45jRFkOMKkX9k6DwdDS0nL79m273S4UClUq1eHDhysrK4nwcL6VjoMNBbAiYTntdvunn3569epVo9HI4XAKCwuPHTt25MgRvV4vEolCEXM4mPAEyHW4+ExEjUo8WYKr46HYB7A1UBTV29t78eLFsbExmLnZ0NAADy7c69VTzNhahKUFx+/q1audnZ1ut7uoqOjpp59uaGgoKiqCXT/yaKFwa+R1rOIqVbZxjChfMN7UoRlWe3t7X19fIBAQiURlZWXPPvtsdnY2wzAQxl/dBceBRVhOUC19fX1Op1Mul9fV1R09erSwsBDv31ABASoEhGAdy3m3/l/GTohXRFkOsD6nKGpqaqqrq8tsNsN0jcOHD6elpUH3GuhNhLX33WAiGGyQ/x0aGjp37tzIyAiLxaqsrDx48GBBQQEEGyD4iKkoCCEQgvXZd5GrjneHdRzn8UL0FSDcNYvF0tLSMjo6ymaz09PTjx8/XldXB0PacRjgC/NJICgMw8zMzFy5cuXWrVs2my0jI2PPnj3FxcUQ18PdM7Do4AjEOh7lZS4M/PkkbBPRtA9g2YBAsLCw0NLSsri4qFQqd+3aBcoAPhPJ7Ft9/4ZIAE3TXV1dV69ehXnvZWVlVVVVycnJuCYCrVAau0qS4n7thri3FqMp6UAVp2kaaoBGRkZsNptOpzt+/Di0t7yP0wpHINhs9vz8/PXr12dnZwOBQF5e3s6dOwsLCyFUQCamuEcJUdZ4uO3xtWvXZmZm8NzMdWzVEGaG5rk3b94EYkh1dfWOHTtUKhVmJTErk9wTWDuiKQeQwrfb7Y2NjdeuXfN4PHl5ebt37xaLxWAQrONog4ODV65cmZub8/v9eXl5u3btysjIAF8DM9KeEJP+oSKacgDRodnZ2aampsXFRZFIpNfrYTAjrjBcO6BlSWNj46VLlxwOB4fDKS0t3bx5M3SvwYVpy4imCawP0bQTKYoymUxdXV2Tk5MkScpksvT0dIlEwkRQitcOn8/X3d3d1NQ0OTlJ03ReXl5lZaVarYYcMV74eCIFPUJEUx84nc7BwcFPP/10enoaOtTl5+cLhULI897v0Ww2240bN6ampoBGvGvXrpqaGqApQNgA10km5ODBEU190N/f/8EHHzQ1NQE7SKPR5OXlQTXISoF6XKQGViEwRCBbODg4eOPGjaWlJaFQWFtbe+TIkezsbFy3+iCZpATuRjT1wWeffXb+/HmTyQRtLqAiPTLYdzdwxDAUbmYMEQiz2dze3j44OGg2m1Uq1TPPPFNRUSEUCnk8HmQTcLw5iuf/JCOacnDx4kXoGSMWi7du3VpbWwskAxRBTlkGTDfC7TPBTejr6wPWYSgUys/P1+v1eLRjAg8D0ZSDyclJ0O1ZWVn79u3btm1bJK1jJeC0EE5Q2e32zs7Ovr4+n8+Xmpq6Y8eOoqKidXgcCawd0ZQDPp/vcrlgEl5tba1KpQp9UbNJnFFE4SpVmqb7+/tv3ry5tLTEYrEqKiqqq6s1Gg1FUfHUx3ajIZp2IjS22bdv3+HDh/Pz84E0AJH/VXhHkMjB1ebz8/M3btzo7u52u91Aa87Pz+dyuVarlXgyRmI8EkRTDsrKyvbs2bNp06bi4mIYpYWLz1dK2WHrAeJCPp+vt7cXsgkEQZSUlGzbtk2pVBIEAf0so3i2CUQimnf2tddeKykpkUgkPB7P5/MhhGBGG8MwK+3uIAdgXfJ4PIvF0t3djWdsVFVV5efn83g8PJ5xdQpTAutGNOWgsrJSJBLhxneg5yE7vPoXIQtF0/SdO3fa29vNZnMoFCosLCwrK5NKpUR4pk8in/TwEE05ANo/QihyI1/d2YMsERSbQheqzs5Op9OZlpZWU1MDBUkovK0kNMHDQzTv7DrWCSeKXC5XS0vL9evXFxYWoAS2rq4uNTUV5AkyiqvXOyTwIIimHKzDmIeNAwpMm5ub5+bmaJpOS0urrq4uLS0Vi8W4B24UzzOBuxFlTXu/fBOwIUwm05UrV1pbW+12O0KouLi4rKxMoVBEtsBJkAweKqLsid2v3obHfXp6+tatWzA/SalUVldXFxUV4aFekFFc1uIqgegimnKwjkUiCAImNY+NjcH43PLy8pqaGrVajXtiR5Y/R/FsE4hElHmqMAvrPn6eJCcnJxsbG8fHxxmGkclkO3bsyM7Ohu0AWK+RBa9RPNsEIhFlfbBSyA8b/Agh6IYKE3YQQtB4xul0IoSUSmVxcbFcLkfhdAMKL388NaXagIiyHKzCM2DCHSpgdSHWZLVap6amPB4PZJuKiopyc3OBunJ3SUkUTzWBZYhdZAa3SsdUg1Ao1N/ff/nyZaCuKBSKbdu2paamJuIEsUdMI3RYFCDiZLVaOzo6urq6TCZTKBTKy8vbvHkzDHVMhJBjjBjJAVj7EDICBmIoFJqamrpz547FYgmFQqmpqfX19VC1uL5S5QQeBDG63aDqwRWEWJPH4xkYGOjv73e5XKFQKCcnBwarPTmtJzYUYtp3H4X5pQzDGI3Gjo6O8fFxn8+n0WgqKyuzsrL4fH6iTu2RIHZyAKFD0Pk2m214eLi/v99isZAkWVhYWF1dDVWLMFIhZmeVACB28UR4ysFNsNvt58+fHx0dValUJEmWl5cXFxdDGz0IJyf4JjFG7OwDiBzAUG0gHblcLoIg9Hr9li1bYKY6EBcS/PTYI9bxA4IgZmZmzp8/PzIy4vf7+Xx+TU0NMNyhJzZ6UjtVPVrEbg4H0AgYhoFpTAaDgcvlFhcX79mzJyMjA3fFis35JLAMsdsX2Gw2m82enJy8evXq/Py83+9Xq9V79+7dtGkTkM9gFA7MY4zNWSWAEVO/0ev13rp169KlS7Ozs8FgMCMjY/v27RqNBurYgdH6haUvCTwMxG7+AiwwTD0jCEKr1VZWVkI7RdxtGxc6JqJJMUbs5vYFg0E+n5+fn799+3a/319UVHTo0CEYdARBBQgbQIeDRKopxojRXB7MP/B4PAsLCzabTSgUpqam4tE2RMS8hhicTwLLELv5TABobkJRFIvF4vF4CQdhgyBGcgDBA9y5IvHobzTELu8MagD4hiABOHCUwCNH7PYFXIaQUAMbELHOO2N7MIENhUfQUYCJmHqT0A0bBLGzE1GiYHkDI6GlE0AoxnzlBDYsEnKQAEIJOUgA8P8A1xp1agGhvSAAAAAASUVORK5CYII="
  },
  {
    "id": "easy-2-1-11",
    "week": 2,
    "keyword": "2-1",
    "question": "몸의 모습만 남긴 이 도식이 나타내는 입장은?",
    "choices": [
      "유물론",
      "상호작용론",
      "부수현상론",
      "관념론",
      "양면 이론"
    ],
    "answer": 0,
    "explanation": "3쪽 그림에서는 실선으로 그린 신체 모습만 나타난다.",
    "choiceExplanations": [
      "3쪽 그림에서는 실선으로 그린 신체 모습만 나타난다.",
      "정신과 신체 사이에 양방향 인과작용을 인정한다.",
      "심적 사건은 두뇌 상태에서 발생하지만 그 자체의 인과적 효력은 없다.",
      "3쪽 그림에서는 점선으로 그린 정신 모습만 나타난다.",
      "하나의 실체가 정신과 신체라는 두 양상으로 표현된다."
    ],
    "sourcePage": 3,
    "image": "data:image/png;base64,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"
  },
  {
    "id": "easy-2-1-12",
    "week": 2,
    "keyword": "2-1",
    "question": "점선 모습만 그린 이 심신 도식의 입장은?",
    "choices": [
      "관념론",
      "상호작용론",
      "부수현상론",
      "유물론",
      "양면 이론"
    ],
    "answer": 0,
    "explanation": "3쪽 그림에서는 점선으로 그린 정신 모습만 나타난다.",
    "choiceExplanations": [
      "3쪽 그림에서는 점선으로 그린 정신 모습만 나타난다.",
      "정신과 신체 사이에 양방향 인과작용을 인정한다.",
      "심적 사건은 두뇌 상태에서 발생하지만 그 자체의 인과적 효력은 없다.",
      "3쪽 그림에서는 실선으로 그린 신체 모습만 나타난다.",
      "하나의 실체가 정신과 신체라는 두 양상으로 표현된다."
    ],
    "sourcePage": 3,
    "image": "data:image/png;base64,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"
  },
  {
    "id": "easy-2-1-13",
    "week": 2,
    "keyword": "2-1",
    "question": "두 모습의 밑부분을 이어 그린 이 도식의 이론은?",
    "choices": [
      "양면 이론",
      "상호작용론",
      "부수현상론",
      "유물론",
      "관념론"
    ],
    "answer": 0,
    "explanation": "하나의 실체가 정신과 신체라는 두 양상으로 표현된다.",
    "choiceExplanations": [
      "하나의 실체가 정신과 신체라는 두 양상으로 표현된다.",
      "정신과 신체 사이에 양방향 인과작용을 인정한다.",
      "심적 사건은 두뇌 상태에서 발생하지만 그 자체의 인과적 효력은 없다.",
      "3쪽 그림에서는 실선으로 그린 신체 모습만 나타난다.",
      "3쪽 그림에서는 점선으로 그린 정신 모습만 나타난다."
    ],
    "sourcePage": 3,
    "image": "data:image/png;base64,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"
  },
  {
    "id": "easy-2-1-14",
    "week": 2,
    "keyword": "2-1",
    "question": "두 모습이 분리되어 있고 인과 화살표가 없는 이 도식은?",
    "choices": [
      "평행론",
      "상호작용론",
      "부수현상론",
      "유물론",
      "관념론"
    ],
    "answer": 0,
    "explanation": "3쪽 그림은 분리된 정신과 신체를 인과 화살표 없이 나타낸다.",
    "choiceExplanations": [
      "3쪽 그림은 분리된 정신과 신체를 인과 화살표 없이 나타낸다.",
      "정신과 신체 사이에 양방향 인과작용을 인정한다.",
      "심적 사건은 두뇌 상태에서 발생하지만 그 자체의 인과적 효력은 없다.",
      "3쪽 그림에서는 실선으로 그린 신체 모습만 나타난다.",
      "3쪽 그림에서는 점선으로 그린 정신 모습만 나타난다."
    ],
    "sourcePage": 3,
    "image": "data:image/png;base64,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"
  },
  {
    "id": "easy-2-1-15",
    "week": 2,
    "keyword": "2-1",
    "question": "번개 표시로 외부 개입을 그린 이 도식의 이론은?",
    "choices": [
      "기회원인론",
      "상호작용론",
      "부수현상론",
      "유물론",
      "관념론"
    ],
    "answer": 0,
    "explanation": "개별 사건은 기회이고 신이 사건을 일으키는 진정한 원인이다.",
    "choiceExplanations": [
      "개별 사건은 기회이고 신이 사건을 일으키는 진정한 원인이다.",
      "정신과 신체 사이에 양방향 인과작용을 인정한다.",
      "심적 사건은 두뇌 상태에서 발생하지만 그 자체의 인과적 효력은 없다.",
      "3쪽 그림에서는 실선으로 그린 신체 모습만 나타난다.",
      "3쪽 그림에서는 점선으로 그린 정신 모습만 나타난다."
    ],
    "sourcePage": 3,
    "image": "data:image/png;base64,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"
  },
  {
    "id": "easy-2-1-16",
    "week": 2,
    "keyword": "2-1",
    "question": "분리된 두 모습이 함께 달리는 이 도식이 나타내는 이론은?",
    "choices": [
      "예정조화론",
      "상호작용론",
      "부수현상론",
      "유물론",
      "관념론"
    ],
    "answer": 0,
    "explanation": "단자들이 직접 작용하지 않아도 신의 사전 조율로 일치한다.",
    "choiceExplanations": [
      "단자들이 직접 작용하지 않아도 신의 사전 조율로 일치한다.",
      "정신과 신체 사이에 양방향 인과작용을 인정한다.",
      "심적 사건은 두뇌 상태에서 발생하지만 그 자체의 인과적 효력은 없다.",
      "3쪽 그림에서는 실선으로 그린 신체 모습만 나타난다.",
      "3쪽 그림에서는 점선으로 그린 정신 모습만 나타난다."
    ],
    "sourcePage": 3,
    "image": "data:image/png;base64,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"
  },
  {
    "id": "easy-2-2-01",
    "week": 2,
    "keyword": "2-2",
    "question": "실체 이원론의 ‘이원’은 무엇을 구별하는가?",
    "choices": [
      "입력과 출력이라는 두 행동",
      "하나의 실체가 가진 두 이름",
      "두 종류의 행동 성향",
      "두뇌의 두 물리적 부분",
      "정신과 신체라는 두 종류의 실체"
    ],
    "answer": 4,
    "explanation": "자료의 실체 이원론은 정신과 신체를 다른 종류의 실체로 본다.",
    "choiceExplanations": [
      "입력·출력은 기능적 역할을 설명하는 요소다.",
      "실체 이원론은 한 실체가 아니라 다른 종류의 실체를 주장한다.",
      "행동 성향은 철학적 행동주의의 설명이다.",
      "정신과 신체의 실체 구별이지 뇌의 해부학적 구별이 아니다.",
      "자료의 실체 이원론은 정신과 신체를 다른 종류의 실체로 본다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-2-2-02",
    "week": 2,
    "keyword": "2-2",
    "question": "실체 이원론에서 감각 정보가 정신에 이르는 방향은?",
    "choices": [
      "행동 → 행동",
      "정신 → 정신만",
      "두뇌 → 두뇌만",
      "두뇌 → 정신",
      "정신 → 두뇌"
    ],
    "answer": 3,
    "explanation": "세계의 감각 정보는 두뇌에서 정신으로 전달된다.",
    "choiceExplanations": [
      "자료는 두뇌와 정신 사이의 정보 전달을 설명한다.",
      "감각 정보는 두뇌로부터 전달된다.",
      "이원론은 정보가 정신으로 전달됨을 인정한다.",
      "세계의 감각 정보는 두뇌에서 정신으로 전달된다.",
      "이 방향은 어떻게 반응할지에 대한 결정의 전달 방향이다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-2-2-03",
    "week": 2,
    "keyword": "2-2",
    "question": "반응에 관한 결정은 실체 이원론에서 어디로 전달되는가?",
    "choices": [
      "외부 세계에서 신에게로만",
      "어디로도 전달되지 않는다.",
      "정신에서 두뇌로",
      "두뇌에서 정신으로",
      "정신에서 다른 정신으로만"
    ],
    "answer": 2,
    "explanation": "반응 결정은 정신에서 두뇌로 향한다.",
    "choiceExplanations": [
      "실체 이원론의 반응 결정 설명이 아니다.",
      "자료는 결정의 전달과 인과적 상호작용을 인정한다.",
      "반응 결정은 정신에서 두뇌로 향한다.",
      "이것은 감각 정보의 전달 방향이다.",
      "자료의 설명은 정신에서 자기 두뇌로의 전달이다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-2-2-04",
    "week": 2,
    "keyword": "2-2",
    "question": "자료의 실체 이원론은 정신과 두뇌 사이의 인과관계를 어떻게 보는가?",
    "choices": [
      "동일성 관계일 뿐이다.",
      "양방향이다.",
      "두뇌에서 정신으로만 향한다.",
      "정신에서 두뇌로만 향한다.",
      "인과관계가 없다."
    ],
    "answer": 1,
    "explanation": "감각 정보와 반응 결정이 서로 반대 방향으로 전달된다.",
    "choiceExplanations": [
      "동일성 관계를 내세우는 것은 동일론이다.",
      "감각 정보와 반응 결정이 서로 반대 방향으로 전달된다.",
      "이원론은 정신에서 두뇌로의 작용도 인정한다.",
      "두뇌에서 정신으로 감각 정보도 전달된다.",
      "정신과 신체의 관계를 인과적으로 설명한다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-2-2-05",
    "week": 2,
    "keyword": "2-2",
    "question": "자료의 실체 이원론에 대한 설명 중 틀린 것은?",
    "choices": [
      "정신과 신체가 다르므로 서로 영향을 줄 수 없다.",
      "정신과 신체는 다른 부류이다.",
      "감각 정보는 두뇌에서 정신으로 간다.",
      "반응 결정은 정신에서 두뇌로 간다.",
      "정신과 신체의 관계는 인과적이다."
    ],
    "answer": 0,
    "explanation": "자료의 입장은 다른 실체이면서도 상호작용한다는 것이다.",
    "choiceExplanations": [
      "자료의 입장은 다른 실체이면서도 상호작용한다는 것이다.",
      "서로 다른 종류의 실체라는 주장이다.",
      "자료에 명시된 전달 방향이다.",
      "자료에 명시된 결정 전달 방향이다.",
      "자료는 양방향 인과관계를 인정한다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-2-2-06",
    "week": 2,
    "keyword": "2-2",
    "question": "엘리자베스 공주가 실체 이원론에 제기한 핵심 질문은?",
    "choices": [
      "단자는 왜 미리 조화를 이루는가?",
      "번개는 어떤 유형의 방전인가?",
      "고통은 어떤 행동 성향인가?",
      "유전 정보는 몇 비트인가?",
      "다른 종류의 정신과 신체는 어떻게 상호작용하는가?"
    ],
    "answer": 4,
    "explanation": "서로 다른 실체 사이의 상호작용을 어떻게 설명하는지 묻는다.",
    "choiceExplanations": [
      "이는 예정조화론과 관련된 질문이다.",
      "이는 동일론의 과학적 동일성 유비와 관련된다.",
      "이는 철학적 행동주의가 답하려는 질문이다.",
      "이는 정보 이론의 정량적 질문이다.",
      "서로 다른 실체 사이의 상호작용을 어떻게 설명하는지 묻는다."
    ],
    "sourcePage": 5
  },
  {
    "id": "easy-2-3-01",
    "week": 2,
    "keyword": "2-3",
    "question": "‘x=y이면 모든 F에 대해 Fx↔Fy’가 나타내는 원리는?",
    "choices": [
      "동등성 원리",
      "정보량 조건",
      "복수실현 가능성",
      "동일자 식별 불가능성",
      "식별 불가능자 동일성"
    ],
    "answer": 3,
    "explanation": "동일한 대상이라면 모든 속성이 같다는 방향이다.",
    "choiceExplanations": [
      "내부와 같은 인지 기능을 하는 외부 과정에 관한 원리다.",
      "신호가 내용을 구별할 양적 능력을 요구한다.",
      "같은 심적 상태가 다른 물리 상태로 실현될 수 있다는 것이다.",
      "동일한 대상이라면 모든 속성이 같다는 방향이다.",
      "모든 속성이 같으면 동일하다는 역방향이다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-2-3-02",
    "week": 2,
    "keyword": "2-3",
    "question": "두 대상의 실제 속성이 하나라도 다르면 동일자 원리상 어떤 결론이 나오는가?",
    "choices": [
      "공유하는 속성이 전혀 없다.",
      "동일성은 행동 성향으로만 정해진다.",
      "동일한 대상이 아니다.",
      "반드시 동일하다.",
      "모든 속성이 달라야 한다."
    ],
    "answer": 2,
    "explanation": "동일하다면 모든 속성이 같아야 하므로 실제 속성 차이는 비동일성을 뜻한다.",
    "choiceExplanations": [
      "다른 대상도 다른 속성들을 공유할 수 있다.",
      "이 원리는 모든 속성의 동일성에 관한 것이다.",
      "동일하다면 모든 속성이 같아야 하므로 실제 속성 차이는 비동일성을 뜻한다.",
      "이는 원리의 결론과 반대다.",
      "하나의 실제 속성 차이만으로도 비동일성이 따라온다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-2-3-03",
    "week": 2,
    "keyword": "2-3",
    "question": "동일자 식별 불가능성 원리의 출발 조건은?",
    "choices": [
      "두 대상을 다르게 믿는다는 것",
      "두 대상이 동일하다는 것",
      "한 속성만 공유한다는 것",
      "두 대상이 다르다는 것",
      "외양이 비슷하다는 것"
    ],
    "answer": 1,
    "explanation": "동일성에서 속성의 일치로 나아간다.",
    "choiceExplanations": [
      "믿음 차이만으로 대상의 속성 차이를 확정하면 안 된다.",
      "동일성에서 속성의 일치로 나아간다.",
      "속성 하나의 공유만으로 동일성을 전제할 수 없다.",
      "비동일성에서 모든 속성 차이를 주장하는 원리가 아니다.",
      "비슷함은 대상의 동일함과 다르다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-2-3-04",
    "week": 2,
    "keyword": "2-3",
    "question": "‘모든 속성을 공유하면 동일하다’는 원리는 원래 동일자 원리와 어떤 관계인가?",
    "choices": [
      "조건과 결론의 방향이 반대이다.",
      "정확히 같은 방향이다.",
      "모든 속성 대신 한 속성만 요구한다.",
      "행동 성향만 다룬다.",
      "정신과 신체에만 적용된다."
    ],
    "answer": 0,
    "explanation": "식별 불가능자 동일성은 모든 속성의 공유에서 동일성으로 간다.",
    "choiceExplanations": [
      "식별 불가능자 동일성은 모든 속성의 공유에서 동일성으로 간다.",
      "동일자 원리는 동일성에서 속성 공유로 간다.",
      "역원리 역시 모든 속성의 공유를 말한다.",
      "자료는 일반적인 속성을 다룬다.",
      "대상의 동일성에 관한 일반 원리이다."
    ],
    "sourcePage": 5
  },
  {
    "id": "easy-2-3-05",
    "week": 2,
    "keyword": "2-3",
    "question": "자료의 ‘내 차’ 논증 중 적절한 구별 근거는?",
    "choices": [
      "나는 두 차의 색깔을 다르게 생각한다.",
      "내 차의 색을 의심한다.",
      "내 차인지 아직 모른다.",
      "두 차가 다르다고 믿는다.",
      "내 차는 빨갛고 앞의 차는 실제로 빨갛지 않다."
    ],
    "answer": 4,
    "explanation": "실제 색깔이 다르다는 속성 차이를 제시한다.",
    "choiceExplanations": [
      "생각의 차이만으로 실제 대상이 다르다고 결론 내리지 못한다.",
      "의심 여부는 실제 차의 색깔 차이와 다르다.",
      "내가 모른다는 것만으로 비동일성이 확정되지 않는다.",
      "대상에 대한 믿음은 실제 속성 차이를 보장하지 않는다.",
      "실제 색깔이 다르다는 속성 차이를 제시한다."
    ],
    "sourcePage": 5
  },
  {
    "id": "easy-2-3-06",
    "week": 2,
    "keyword": "2-3",
    "question": "데카르트의 의심 논증을 비판할 때 자료가 강조한 주의점은?",
    "choices": [
      "동일한 대상도 모든 속성이 달라도 된다는 것",
      "하나의 속성이 같으면 대상을 동일시할 것",
      "의심할 수 있으면 그 대상은 존재하지 않는다는 것",
      "믿음·의심의 차이를 곧 대상 자체의 속성 차이로 취급하지 말 것",
      "실제 물리적 차이는 항상 무시할 것"
    ],
    "answer": 3,
    "explanation": "자료의 차와 저자 사례는 이 적용의 문제를 지적한다.",
    "choiceExplanations": [
      "동일자 원리 자체를 이렇게 바꾸는 것이 아니다.",
      "속성 하나를 공유한다는 것만으로 동일성이 나오지 않는다.",
      "자료는 의심에서 곧 비존재를 결론 내리지 않는다.",
      "자료의 차와 저자 사례는 이 적용의 문제를 지적한다.",
      "실제 색깔 차이는 적절한 구별 근거로 제시된다."
    ],
    "sourcePage": 5
  },
  {
    "id": "easy-2-4-01",
    "week": 2,
    "keyword": "2-4",
    "question": "철학적 행동주의가 심적 상태와 동일시하는 것은?",
    "choices": [
      "특정 두뇌 상태",
      "입력·출력·내적 연결의 직무",
      "특정 상황에서 행동하려는 성향",
      "실제로 일어난 한 행동만",
      "비물리적 영혼"
    ],
    "answer": 2,
    "explanation": "실제 일어난 한 행동이 아니라 조건에 따른 행동 성향이다.",
    "choiceExplanations": [
      "이는 동일론의 기준이다.",
      "이는 기능주의의 기준이다.",
      "실제 일어난 한 행동이 아니라 조건에 따른 행동 성향이다.",
      "성향은 실제 행동이 일어나지 않아도 가질 수 있다.",
      "비물리 실체가 아니라 물리주의적 설명을 제시한다."
    ],
    "sourcePage": 7
  },
  {
    "id": "easy-2-4-02",
    "week": 2,
    "keyword": "2-4",
    "question": "철학적 행동주의의 별칭으로 알맞은 것은?",
    "choices": [
      "적극적·사회적 외재론",
      "논리적·분석적 행동주의",
      "방법론적·인과적 동일론",
      "실체·속성 이원론",
      "유형·개별자 동일론"
    ],
    "answer": 1,
    "explanation": "자료는 두 별칭을 함께 제시한다.",
    "choiceExplanations": [
      "이는 외재론의 구별이다.",
      "자료는 두 별칭을 함께 제시한다.",
      "방법론적 행동주의와 철학적 행동주의는 구별된다.",
      "이는 행동주의의 별칭이 아니다.",
      "이는 동일성 이론의 구별이다."
    ],
    "sourcePage": 7
  },
  {
    "id": "easy-2-4-03",
    "week": 2,
    "keyword": "2-4",
    "question": "‘고통이 행동 성향을 일으킨다’와 철학적 행동주의의 설명은 어떻게 다른가?",
    "choices": [
      "행동주의는 고통 자체가 해당 행동 성향이라고 한다.",
      "행동주의는 고통을 별도 영혼이라고 한다.",
      "행동주의는 고통을 행동의 결과로만 본다.",
      "행동주의는 고통과 성향이 무관하다고 한다.",
      "행동주의는 고통을 신경섬유라고만 한다."
    ],
    "answer": 0,
    "explanation": "고통을 성향과 별개의 원인으로 두지 않는다.",
    "choiceExplanations": [
      "고통을 성향과 별개의 원인으로 두지 않는다.",
      "고통을 비물리적 실체로 설명하지 않는다.",
      "핵심은 성향과 고통의 동일시이다.",
      "행동 성향을 통해 고통을 설명한다.",
      "특정 신경 상태와의 동일성은 동일론이다."
    ],
    "sourcePage": 7
  },
  {
    "id": "easy-2-4-04",
    "week": 2,
    "keyword": "2-4",
    "question": "자료의 고통 사례에서 행동 성향에 해당하는 것은?",
    "choices": [
      "단 한 번 일어난 울음소리",
      "비물리적 실체의 크기",
      "입력과 출력 사이의 모든 내적 상태",
      "뇌손상 부위의 위치만",
      "일정 상황에서 울고 움츠리려는 경향"
    ],
    "answer": 4,
    "explanation": "고통은 해당 상황에서 일정하게 반응하려는 성향으로 설명된다.",
    "choiceExplanations": [
      "실제 한 번의 행동은 성향 전체와 같지 않다.",
      "행동주의는 그런 실체를 도입하지 않는다.",
      "다른 내적 상태의 연결을 포함하는 역할은 기능주의의 기준이다.",
      "뇌 상태 자체로 심적 상태를 동일시하는 기준이 아니다.",
      "고통은 해당 상황에서 일정하게 반응하려는 성향으로 설명된다."
    ],
    "sourcePage": 7
  },
  {
    "id": "easy-2-4-05",
    "week": 2,
    "keyword": "2-4",
    "question": "철학적 행동주의에서 ‘행동’은 어떤 사건을 가리키는가?",
    "choices": [
      "형식 기호의 의미만",
      "신의 사전 조율만",
      "단자의 내적 법칙만",
      "물리적 사건",
      "정신 실체 안의 비물리적 사건만"
    ],
    "answer": 3,
    "explanation": "자료는 행동과 그것을 유발하는 상황을 물리적 사건으로 설명한다.",
    "choiceExplanations": [
      "기호 의미가 행동의 정의는 아니다.",
      "이는 예정조화론의 설명이다.",
      "단자 설명은 라이프니츠의 논의다.",
      "자료는 행동과 그것을 유발하는 상황을 물리적 사건으로 설명한다.",
      "물리주의적 행동 설명과 다르다."
    ],
    "sourcePage": 7
  },
  {
    "id": "easy-2-4-06",
    "week": 2,
    "keyword": "2-4",
    "question": "행동 성향으로 심적 상태를 설명하는 철학적 행동주의는 어떤 종류의 설명을 제시하는가?",
    "choices": [
      "예정조화론적 설명",
      "속성 이원론적 설명",
      "물리주의적 설명",
      "실체 이원론적 설명",
      "기회원인론적 설명"
    ],
    "answer": 2,
    "explanation": "행동과 상황을 물리적 사건으로 설명한다.",
    "choiceExplanations": [
      "단자의 사전 조화로 설명하지 않는다.",
      "비물리적 감각질 속성을 별도로 도입하는 설명이 아니다.",
      "행동과 상황을 물리적 사건으로 설명한다.",
      "별도 정신 실체를 가정하지 않는다.",
      "신을 진정한 원인으로 삼지 않는다."
    ],
    "sourcePage": 7
  },
  {
    "id": "easy-2-5-01",
    "week": 2,
    "keyword": "2-5",
    "question": "초-금욕주의자 사례가 상정하는 조합은?",
    "choices": [
      "행동 성향이 있으면 고통은 반드시 없다.",
      "고통은 있으나 전형적 고통 행동 성향은 없다.",
      "고통은 없으나 고통 행동 성향은 있다.",
      "고통과 행동 성향이 반드시 함께 있다.",
      "고통도 행동도 존재할 수 없다."
    ],
    "answer": 1,
    "explanation": "고통 행동 성향이 고통의 필요조건이 아님을 보이려는 사례다.",
    "choiceExplanations": [
      "행동과 고통이 언제나 반대라는 주장이 아니다.",
      "고통 행동 성향이 고통의 필요조건이 아님을 보이려는 사례다.",
      "이는 완벽한 연기자 사례의 방향이다.",
      "초-금욕주의자 사례는 이 결합을 분리한다.",
      "고통의 존재를 인정한 채 성향의 부재를 상정한다."
    ],
    "sourcePage": 9
  },
  {
    "id": "easy-2-5-02",
    "week": 2,
    "keyword": "2-5",
    "question": "완벽한 연기자 사례는 고통 행동 성향의 어떤 조건성을 부정하는가?",
    "choices": [
      "고통의 충분조건이라는 주장",
      "고통의 필요조건이라는 주장",
      "비물리적 실체의 존재조건",
      "정신과 두뇌의 양방향 작용조건",
      "신의 개입조건"
    ],
    "answer": 0,
    "explanation": "행동 성향이 있어도 실제 고통이 없을 수 있다.",
    "choiceExplanations": [
      "행동 성향이 있어도 실제 고통이 없을 수 있다.",
      "필요조건 부정은 초-금욕주의자가 보여주는 방향이다.",
      "실체의 종류보다 고통과 행동 성향의 대응이 쟁점이다.",
      "이는 실체 이원론의 별도 논점이다.",
      "이 반례는 기회원인론을 다루지 않는다."
    ],
    "sourcePage": 9
  },
  {
    "id": "easy-2-5-03",
    "week": 2,
    "keyword": "2-5",
    "question": "‘고통 행동 성향이 고통의 필요조건은 아니다’의 뜻은?",
    "choices": [
      "그 성향이 있으면 반드시 고통이다.",
      "고통은 어떤 경우에도 없다.",
      "모든 고통은 다른 성향을 갖는다.",
      "고통 행동은 모두 연기이다.",
      "그 성향 없이도 고통이 있을 수 있다."
    ],
    "answer": 4,
    "explanation": "필요조건이 아니라면 그 조건을 결여하고도 고통이 가능하다.",
    "choiceExplanations": [
      "이는 충분조건을 주장하는 방향이다.",
      "필요조건을 부정해도 고통의 존재 자체를 부정하지 않는다.",
      "이 반례는 모든 고통의 성향 차이를 주장하지 않는다.",
      "연기 사례가 모든 고통 행동을 설명한다는 뜻은 아니다.",
      "필요조건이 아니라면 그 조건을 결여하고도 고통이 가능하다."
    ],
    "sourcePage": 9
  },
  {
    "id": "easy-2-5-04",
    "week": 2,
    "keyword": "2-5",
    "question": "사자를 보고도 멈춰 서는 사례가 강조하는 점은?",
    "choices": [
      "같은 자극은 항상 같은 행동을 낳는다.",
      "믿음과 욕망은 행동과 무관하다.",
      "외적 행동 하나가 모든 믿음을 보여준다.",
      "행동은 믿음과 욕망 등 여러 심적 상태에 달려 있다.",
      "사자를 본 사람은 위험을 전혀 모른다."
    ],
    "answer": 3,
    "explanation": "정지가 최선의 회피라고 믿으면 사자 앞에서도 움직이지 않을 수 있다.",
    "choiceExplanations": [
      "바로 그 단순 대응을 비판하는 사례다.",
      "여러 심적 상태가 행동에 함께 영향을 준다.",
      "행동 하나만으로 믿음을 일대일로 연결하기 어렵다.",
      "정지가 최선의 회피라고 믿으면 사자 앞에서도 움직이지 않을 수 있다.",
      "위험을 알아도 회피 방법에 대한 믿음 때문에 멈출 수 있다."
    ],
    "sourcePage": 9
  },
  {
    "id": "easy-2-5-05",
    "week": 2,
    "keyword": "2-5",
    "question": "급여일에 관한 믿음에서 다른 믿음으로 나아가는 사례가 행동주의에 던지는 문제는?",
    "choices": [
      "단자들이 직접 상호작용하는가",
      "정보량을 비트로 바꾸는 방법",
      "심적 상태 사이의 합리적 이행 설명",
      "두뇌 손상의 해부학적 위치",
      "신이 사건을 조율하는 방법"
    ],
    "answer": 2,
    "explanation": "서로 다른 믿음이 새 믿음의 근거가 되는 사고를 행동 성향만으로 설명하기 어렵다.",
    "choiceExplanations": [
      "예정조화론의 쟁점이 아니다.",
      "정보 이론의 계산이 아니다.",
      "서로 다른 믿음이 새 믿음의 근거가 되는 사고를 행동 성향만으로 설명하기 어렵다.",
      "이 사례의 쟁점은 믿음들의 합리적 연결이다.",
      "기회원인론의 쟁점이 아니다."
    ],
    "sourcePage": 8
  },
  {
    "id": "easy-2-5-06",
    "week": 2,
    "keyword": "2-5",
    "question": "압정을 밟으면 소리 내는 로봇의 사례에서 묻는 핵심은?",
    "choices": [
      "로봇은 신의 개입 없이 작동하는가",
      "반응 성향만으로 고통의 의식 경험이 설명되는가?",
      "로봇이 소리를 낼 수 있는가만",
      "로봇의 신체가 비물리적인가",
      "고통은 항상 거짓인 명제인가"
    ],
    "answer": 1,
    "explanation": "소리를 낼 수 있음과 실제로 아프게 느끼는 것은 구별된다.",
    "choiceExplanations": [
      "자료의 행동주의 반론과 다르다.",
      "소리를 낼 수 있음과 실제로 아프게 느끼는 것은 구별된다.",
      "소리를 낸다고 설정하고 경험의 설명을 묻는다.",
      "자료의 쟁점은 의식 경험이다.",
      "고통은 참·거짓만의 문제가 아니다."
    ],
    "sourcePage": 9
  },
  {
    "id": "easy-2-5-07",
    "week": 2,
    "keyword": "2-5",
    "question": "두 반례의 연결이 맞는 것은?",
    "choices": [
      "초-금욕주의자: 고통 있음 / 연기자: 고통 없음",
      "초-금욕주의자: 고통 없음 / 연기자: 고통 있음",
      "둘 다 반드시 고통이 없다.",
      "둘 다 반드시 고통이 있다.",
      "둘 다 행동 성향과 고통의 동일성을 입증한다."
    ],
    "answer": 0,
    "explanation": "둘은 고통과 전형적 행동 성향을 반대 방향으로 분리한다.",
    "choiceExplanations": [
      "둘은 고통과 전형적 행동 성향을 반대 방향으로 분리한다.",
      "두 사례의 고통 유무가 뒤바뀌었다.",
      "초-금욕주의자는 고통이 있다고 설정한다.",
      "완벽한 연기자는 실제 고통이 없다고 설정한다.",
      "두 반례는 그 동일성에 반대한다."
    ],
    "sourcePage": 9
  },
  {
    "id": "easy-2-5-08",
    "week": 2,
    "keyword": "2-5",
    "question": "여러 믿음과 욕망에 따라 같은 자극의 반응이 달라진다면 곤란해지는 설명은?",
    "choices": [
      "행동에 여러 심적 상태가 작용한다는 설명",
      "정지하는 것도 반응일 수 있다는 설명",
      "회피 방법에 대한 믿음이 중요하다는 설명",
      "겉으로 고통을 감출 수 있다는 설명",
      "각 심적 상태마다 하나의 행동이 대응한다는 설명"
    ],
    "answer": 4,
    "explanation": "자료는 여러 심적 상태의 결합이 행동을 결정한다고 지적한다.",
    "choiceExplanations": [
      "이 설명은 해당 반례의 요지에 부합한다.",
      "사자 앞의 정지 사례에서 인정되는 것이다.",
      "자료의 사례가 보여주는 점이다.",
      "초-금욕주의자라는 별도 반례와 부합한다.",
      "자료는 여러 심적 상태의 결합이 행동을 결정한다고 지적한다."
    ],
    "sourcePage": 9
  },
  {
    "id": "easy-2-6-01",
    "week": 2,
    "keyword": "2-6",
    "question": "홉스·가상디·스마트가 자료에서 함께 소개되는 이론은?",
    "choices": [
      "양면 이론",
      "기능주의",
      "철학적 행동주의",
      "동일론",
      "기회원인론"
    ],
    "answer": 3,
    "explanation": "심적 상태를 일정한 두뇌의 물리적 상태와 동일시한다.",
    "choiceExplanations": [
      "하나의 실체가 정신과 신체라는 두 양상으로 표현된다.",
      "심적 상태를 입력·출력·내적 연결로 규정된 직무를 수행하는 상태로 본다.",
      "심적 상태를 일정한 상황에서 일정하게 행동하려는 성향으로 설명한다.",
      "심적 상태를 일정한 두뇌의 물리적 상태와 동일시한다.",
      "개별 사건은 기회이고 신이 사건을 일으키는 진정한 원인이다."
    ],
    "sourcePage": 11
  },
  {
    "id": "easy-2-6-02",
    "week": 2,
    "keyword": "2-6",
    "question": "동일론에 대한 정확한 진술은?",
    "choices": [
      "뇌와 정신은 오직 우연히 함께 나타난다.",
      "심적 상태는 행동 성향일 뿐이다.",
      "모든 심적 상태는 일정한 두뇌 상태이다.",
      "모든 두뇌 상태가 심적 상태여야 한다.",
      "심적 상태는 뇌와 별개의 실체이다."
    ],
    "answer": 2,
    "explanation": "모든 두뇌 상태가 심적 상태라는 역주장은 하지 않는다.",
    "choiceExplanations": [
      "동일론은 단순 상관을 넘어 동일성을 주장한다.",
      "이는 철학적 행동주의의 설명이다.",
      "모든 두뇌 상태가 심적 상태라는 역주장은 하지 않는다.",
      "자료는 이 역방향 주장을 하지 않는다고 명시한다.",
      "이는 실체 이원론의 설명이다."
    ],
    "sourcePage": 11
  },
  {
    "id": "easy-2-6-03",
    "week": 2,
    "keyword": "2-6",
    "question": "동일론에서 동일하다고 주장하는 것은?",
    "choices": [
      "정보량과 정보 내용",
      "심적 상태와 두뇌의 물리적 상태",
      "정신 실체와 신의 개입",
      "행동 성향과 외부 환경만",
      "언어의 철자와 단어의 의미"
    ],
    "answer": 1,
    "explanation": "정신 상태 유형과 일정한 두뇌 상태 유형의 동일성이다.",
    "choiceExplanations": [
      "두 개념은 같지 않다는 것이 정보 논의의 요점이다.",
      "정신 상태 유형과 일정한 두뇌 상태 유형의 동일성이다.",
      "기회원인론의 개념을 섞은 설명이다.",
      "이것이 동일론의 동일성 대상은 아니다.",
      "구문론과 의미론은 별도로 구별한다."
    ],
    "sourcePage": 11
  },
  {
    "id": "easy-2-6-04",
    "week": 2,
    "keyword": "2-6",
    "question": "자료에서 동일론 철학자의 국적 연결이 맞는 것은?",
    "choices": [
      "홉스—영국",
      "홉스—프랑스",
      "가상디—호주",
      "스마트—영국",
      "가상디—영국"
    ],
    "answer": 0,
    "explanation": "자료는 영국 홉스, 프랑스 가상디, 호주 스마트를 제시한다.",
    "choiceExplanations": [
      "자료는 영국 홉스, 프랑스 가상디, 호주 스마트를 제시한다.",
      "프랑스로 소개된 인물은 가상디다.",
      "가상디는 프랑스로 제시된다.",
      "스마트는 호주로 제시된다.",
      "가상디는 프랑스로 제시된다."
    ],
    "sourcePage": 11
  },
  {
    "id": "easy-2-6-05",
    "week": 2,
    "keyword": "2-6",
    "question": "동일론과 단순 상관관계 주장의 차이는?",
    "choices": [
      "동일론은 둘이 반드시 다른 실체라고 주장한다.",
      "동일론은 뇌 상태를 부정한다.",
      "동일론은 뇌 상태의 인과적 역할을 모두 부정한다.",
      "동일론은 심적 상태가 행동을 못 낳는다는 뜻이다.",
      "동일론은 두 상태가 바로 같은 상태라고 주장한다."
    ],
    "answer": 4,
    "explanation": "함께 발생한다는 것에 그치지 않고 동일하다고 본다.",
    "choiceExplanations": [
      "이는 동일성이 아니라 실체 구별이다.",
      "물리적 뇌 상태를 통해 심적 상태를 설명한다.",
      "자료의 주장은 상태의 동일성이다.",
      "이것은 동일론의 정의가 아니다.",
      "함께 발생한다는 것에 그치지 않고 동일하다고 본다."
    ],
    "sourcePage": 11
  },
  {
    "id": "easy-2-7-01",
    "week": 2,
    "keyword": "2-7",
    "question": "스마트가 물과 H₂O의 예로 강조한 심신 동일성의 성격은?",
    "choices": [
      "신이 매번 만드는 인과관계",
      "행동을 억제하면 없어지는 동일성",
      "두 비물리 실체 사이의 동일성",
      "과학적 탐구로 확인할 동일성",
      "언어 정의만으로 자명한 동일성"
    ],
    "answer": 3,
    "explanation": "말뜻만 살피거나 단순 관찰만으로 확립되는 뻔한 참이 아니다.",
    "choiceExplanations": [
      "기회원인론과 구별된다.",
      "행동 억제가 동일성 유비의 기준이 아니다.",
      "스마트는 심적 상태와 두뇌의 물리적 상태를 논한다.",
      "말뜻만 살피거나 단순 관찰만으로 확립되는 뻔한 참이 아니다.",
      "자료는 과학적 탐구가 필요하다고 한다."
    ],
    "sourcePage": 11
  },
  {
    "id": "easy-2-7-02",
    "week": 2,
    "keyword": "2-7",
    "question": "번개와 대기의 전기 방전의 동일성은 자료의 어느 구별에 속하는가?",
    "choices": [
      "내포와 외연의 구별",
      "필요조건과 충분조건의 구별",
      "유형의 동일성",
      "개별자의 동일성만",
      "신의 개입과 기회의 구별"
    ],
    "answer": 2,
    "explanation": "번개라는 종류와 대기의 전기 방전이라는 종류의 동일성이다.",
    "choiceExplanations": [
      "의미론의 구별이며 이 예의 동일성 분류가 아니다.",
      "여기서는 개별자와 유형의 구별을 묻는다.",
      "번개라는 종류와 대기의 전기 방전이라는 종류의 동일성이다.",
      "자료는 이 예를 유형 동일성으로 명시한다.",
      "기회원인론의 구별이다."
    ],
    "sourcePage": 11
  },
  {
    "id": "easy-2-7-03",
    "week": 2,
    "keyword": "2-7",
    "question": "딩고 네 마리를 자료의 용어로 세면?",
    "choices": [
      "개별자는 없고 유형만 넷",
      "개별자 넷, 딩고 유형 하나",
      "개별자 하나, 유형 넷",
      "개별자 넷, 딩고 유형 넷",
      "개별자도 유형도 하나"
    ],
    "answer": 1,
    "explanation": "개개의 동물과 그들이 속하는 종류를 구별한다.",
    "choiceExplanations": [
      "네 개체가 실제 개별자에 해당한다.",
      "개개의 동물과 그들이 속하는 종류를 구별한다.",
      "개별자와 유형의 수가 뒤바뀌었다.",
      "네 개체가 같은 딩고 유형에 속한다.",
      "동물 개체는 네 마리다."
    ],
    "sourcePage": 11
  },
  {
    "id": "easy-2-7-04",
    "week": 2,
    "keyword": "2-7",
    "question": "‘2005년 미국 대통령=조지 부시’는 어떤 예인가?",
    "choices": [
      "특정 개별자의 동일성",
      "동물 유형 둘의 동일성",
      "기능적 역할의 복수실현",
      "종 제한 고통의 동일성",
      "행동 성향과 고통의 동일성"
    ],
    "answer": 0,
    "explanation": "자료는 종류의 동일성과 구별되는 개별자 동일성의 예로 든다.",
    "choiceExplanations": [
      "자료는 종류의 동일성과 구별되는 개별자 동일성의 예로 든다.",
      "동물 종류를 비교한 사례가 아니다.",
      "특정 직무의 여러 물리적 실현을 설명하는 예가 아니다.",
      "고통을 종별로 연결하는 예가 아니다.",
      "행동주의의 설명이 아니다."
    ],
    "sourcePage": 11
  },
  {
    "id": "easy-2-7-05",
    "week": 2,
    "keyword": "2-7",
    "question": "스마트의 동일성 주장을 확립하는 방법으로 자료가 배제한 것은?",
    "choices": [
      "인간 두뇌에 대한 이해 증진",
      "과학적 동일성의 탐구",
      "물과 H₂O 같은 사례와의 비교",
      "각 심적 유형과 뇌 유형의 관계 탐구",
      "‘믿음’ 등 낱말의 의미를 반성하는 것만으로 확정"
    ],
    "answer": 4,
    "explanation": "심신 동일성은 의미 검사만으로 확립되지 않고 과학적 탐구를 요구한다.",
    "choiceExplanations": [
      "두뇌 이해의 증진이 동일성 주장을 그럴듯하게 한다.",
      "스마트의 유비가 요구하는 접근이다.",
      "자료에 제시된 스마트의 유비다.",
      "스마트가 주장하는 유형 동일성에 해당한다.",
      "심신 동일성은 의미 검사만으로 확립되지 않고 과학적 탐구를 요구한다."
    ],
    "sourcePage": 11
  },
  {
    "id": "easy-2-8-01",
    "week": 2,
    "keyword": "2-8",
    "question": "제한적 유형 동일론이 동일성을 제한하는 기준은?",
    "choices": [
      "신체 크기만",
      "단어의 철자",
      "신호의 길이",
      "생물종",
      "행동의 발생 횟수"
    ],
    "answer": 3,
    "explanation": "유형 동일성을 종에 제한해서 적용한다.",
    "choiceExplanations": [
      "자료의 기준은 종이다.",
      "언어 철자가 유형 동일성 제한의 기준이 아니다.",
      "정보 이론의 기준과 다르다.",
      "유형 동일성을 종에 제한해서 적용한다.",
      "행동 횟수에 따른 제한이 아니다."
    ],
    "sourcePage": 12
  },
  {
    "id": "easy-2-8-02",
    "week": 2,
    "keyword": "2-8",
    "question": "제한적 유형 동일론을 도입한 배경은?",
    "choices": [
      "모든 두뇌 상태가 고통이라는 주장",
      "모든 감각질은 거짓이라는 주장",
      "같은 고통이 다른 물리 상태로 실현될 수 있음",
      "모든 동물이 같은 신경을 가진다는 사실",
      "고통이 어떤 물리 상태와도 무관하다는 확정"
    ],
    "answer": 2,
    "explanation": "복수실현 가능성에 맞서 동일론을 유지하려는 방안이다.",
    "choiceExplanations": [
      "동일론도 모든 뇌 상태를 고통이라고 하지 않는다.",
      "감각질의 참·거짓을 다루는 논의가 아니다.",
      "복수실현 가능성에 맞서 동일론을 유지하려는 방안이다.",
      "자료는 다른 신경계를 상상하며 문제를 제기한다.",
      "복수실현은 물리적 실현 자체를 부정하지 않는다."
    ],
    "sourcePage": 12
  },
  {
    "id": "easy-2-8-03",
    "week": 2,
    "keyword": "2-8",
    "question": "자료의 종별 대응 예에서 외계인의 고통은 무엇과 연결되는가?",
    "choices": [
      "오직 외적 비명",
      "실리콘 칩 E의 활성화",
      "반드시 인간의 c-섬유",
      "반드시 오징어의 d-섬유",
      "어떤 물리적 상태도 아님"
    ],
    "answer": 1,
    "explanation": "인간 c-섬유, 오징어 d-섬유, 외계인 실리콘 칩 E가 예시된다.",
    "choiceExplanations": [
      "행동 자체가 아니라 물리적 내적 상태를 대응시킨다.",
      "인간 c-섬유, 오징어 d-섬유, 외계인 실리콘 칩 E가 예시된다.",
      "외계인은 c-섬유 비슷한 것도 없다고 상정한다.",
      "외계인에게는 실리콘 칩 E를 예시한다.",
      "종별로 다른 물리적 실현을 제시한다."
    ],
    "sourcePage": 12
  },
  {
    "id": "easy-2-8-04",
    "week": 2,
    "keyword": "2-8",
    "question": "에펠탑의 위치에 관한 같은 믿음 사례가 제기하는 비판은?",
    "choices": [
      "같은 종 안에서도 믿음의 물리적 저장 방식이 다를 수 있다.",
      "같은 종은 같은 믿음을 가질 수 없다.",
      "에펠탑의 위치는 사람마다 다르다.",
      "두뇌 구조가 모두 완전히 다르다.",
      "제한적 동일론은 행동주의의 별칭이다."
    ],
    "answer": 0,
    "explanation": "종을 제한해도 유형 대응의 어려움이 남는다는 지적이다.",
    "choiceExplanations": [
      "종을 제한해도 유형 대응의 어려움이 남는다는 지적이다.",
      "같은 믿음을 가지면서 저장 방식이 다르다는 사례다.",
      "믿음의 내용이 아니라 그 물리적 실현의 차이다.",
      "윤곽이 비슷해도 저장 위치와 기존 정보가 다를 수 있다.",
      "종 제한 물리 유형 동일성과 행동 성향 설명은 다르다."
    ],
    "sourcePage": 12
  },
  {
    "id": "easy-2-9-01",
    "week": 2,
    "keyword": "2-9",
    "question": "기능주의가 재질보다 우선하는 기준은?",
    "choices": [
      "동일한 신경섬유의 보유",
      "비물리적 영혼의 종류",
      "실제로 나타난 한 번의 행동만",
      "신의 사전 조율",
      "내적 상태가 수행하는 직무"
    ],
    "answer": 4,
    "explanation": "같은 직무를 다른 물리적 구조가 수행할 수 있다.",
    "choiceExplanations": [
      "같은 신경섬유를 필수로 요구하는 기준이 아니다.",
      "기능주의의 기준이 아니다.",
      "입력·출력·다른 내적 상태와의 연결을 함께 본다.",
      "예정조화론의 설명이다.",
      "같은 직무를 다른 물리적 구조가 수행할 수 있다."
    ],
    "sourcePage": 13
  },
  {
    "id": "easy-2-9-02",
    "week": 2,
    "keyword": "2-9",
    "question": "골절이 고통을 일으키는 관계는 고통 역할의 어느 요소인가?",
    "choices": [
      "내적 연결",
      "유형 동일성",
      "행동 성향 자체",
      "입력",
      "출력"
    ],
    "answer": 3,
    "explanation": "입력은 고통을 일으키는 상황이다.",
    "choiceExplanations": [
      "내적 연결은 고통과 다른 심적 상태 사이의 인과적 결합이다.",
      "골절의 역할 분류는 입력이다.",
      "고통 역할에서는 골절을 입력 상황으로 분류한다.",
      "입력은 고통을 일으키는 상황이다.",
      "출력은 고통이 일으키는 행동이다."
    ],
    "sourcePage": 13
  },
  {
    "id": "easy-2-9-03",
    "week": 2,
    "keyword": "2-9",
    "question": "고통으로 비명을 지르는 관계는 어느 요소인가?",
    "choices": [
      "종 제한",
      "과학적 동일성",
      "출력",
      "입력",
      "내적 연결"
    ],
    "answer": 2,
    "explanation": "고통이 일으키는 행동이 출력이다.",
    "choiceExplanations": [
      "제한적 유형 동일론의 기준이다.",
      "입력·출력의 역할 분류와 다른 문제다.",
      "고통이 일으키는 행동이 출력이다.",
      "고통을 일으키는 상황이 입력이다.",
      "근심 같은 다른 심적 상태와의 연결이다."
    ],
    "sourcePage": 13
  },
  {
    "id": "easy-2-9-04",
    "week": 2,
    "keyword": "2-9",
    "question": "고통이 근심과 인과적으로 연결되는 것은?",
    "choices": [
      "재질의 동일성",
      "내적 연결",
      "입력",
      "출력",
      "외적 행동만"
    ],
    "answer": 1,
    "explanation": "고통과 다른 심적 상태 사이의 연결이다.",
    "choiceExplanations": [
      "기능적 역할 중 내적 연결을 묻는 예다.",
      "고통과 다른 심적 상태 사이의 연결이다.",
      "입력은 골절처럼 고통을 유발하는 상황이다.",
      "출력은 비명처럼 고통이 일으키는 행동이다.",
      "근심은 여기서 다른 심적 상태이다."
    ],
    "sourcePage": 13
  },
  {
    "id": "easy-2-9-05",
    "week": 2,
    "keyword": "2-9",
    "question": "기화장치의 유비에서 중요하다고 한 기능은?",
    "choices": [
      "연료를 공기와 섞어 엔진에 전달함",
      "같은 금속으로만 제작됨",
      "정신이 신체를 움직이게 함",
      "고통이 행동을 억제함",
      "신이 물리적 사건을 조율함"
    ],
    "answer": 0,
    "explanation": "재질이 아니라 수행하는 이 직무가 기화장치의 기준이다.",
    "choiceExplanations": [
      "재질이 아니라 수행하는 이 직무가 기화장치의 기준이다.",
      "자료는 재질은 중요하지 않다고 한다.",
      "상호작용론의 설명이다.",
      "기화장치의 직무 설명이 아니다.",
      "기회원인론의 설명이다."
    ],
    "sourcePage": 13
  },
  {
    "id": "easy-2-9-06",
    "week": 2,
    "keyword": "2-9",
    "question": "페니실린과 에리트로마이신의 예가 기능주의를 돕는 이유는?",
    "choices": [
      "모든 항생제의 화학 구조가 같아서",
      "기능은 물리적 상태에서 실현될 수 없어서",
      "같은 기능이면 같은 재질이어야 해서",
      "내적 상태는 기능을 수행하지 않아서",
      "구조가 달라도 같은 직무를 수행할 수 있어서"
    ],
    "answer": 4,
    "explanation": "서로 다른 화학 구조를 지니지만 항생제로서의 기능이 중요하다.",
    "choiceExplanations": [
      "자료는 화학 구조가 다르다고 제시한다.",
      "다른 구조로 같은 기능이 실현된다는 유비다.",
      "재질보다 기능을 강조하는 설명과 반대다.",
      "기능주의는 직무를 수행하는 내적 상태를 설명한다.",
      "서로 다른 화학 구조를 지니지만 항생제로서의 기능이 중요하다."
    ],
    "sourcePage": 13
  },
  {
    "id": "easy-3-1-01",
    "week": 3,
    "keyword": "3-1",
    "question": "튜링이 모방 게임으로 원래 질문을 바꾸려 한 이유는?",
    "choices": [
      "컴퓨터의 외형이 완벽해야 해서",
      "사람의 모든 마음을 직접 관찰할 수 있어서",
      "사람은 기계보다 항상 계산이 빨라서",
      "‘기계’와 ‘생각’의 말뜻 정의만으로는 논의가 여론조사에 머물 수 있어서",
      "기계는 어떤 대화도 할 수 없어서"
    ],
    "answer": 3,
    "explanation": "원래 용어를 정의하는 대신 새로운 형식의 문제를 제안한다.",
    "choiceExplanations": [
      "이 게임의 이점은 신체 능력과 지적 능력의 구별이다.",
      "직접 마음을 보는 방식이 아니라 문답을 사용한다.",
      "자료는 사람이 기계인 척하면 느리고 부정확할 수 있다고 한다.",
      "원래 용어를 정의하는 대신 새로운 형식의 문제를 제안한다.",
      "대화를 통한 판별 가능성을 시험한다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-3-1-02",
    "week": 3,
    "keyword": "3-1",
    "question": "튜링 테스트에서 인공 피부의 유무를 핵심 기준으로 삼지 않는 이유는?",
    "choices": [
      "기계의 몸을 직접 검사하기 위해서",
      "사람과 기계의 몸이 같다고 증명하기 위해서",
      "겉모습과 지적 능력을 구별하기 위해서",
      "인공 피부가 계산 속도를 높이므로",
      "피부가 있어야 대답할 수 있으므로"
    ],
    "answer": 2,
    "explanation": "인공 피부를 입힌다고 생각하는 기계가 더 인간적이 되는 것은 아니라고 설명한다.",
    "choiceExplanations": [
      "문답을 통해 지적 수행을 판단한다.",
      "몸이 같아야 한다는 시험이 아니다.",
      "인공 피부를 입힌다고 생각하는 기계가 더 인간적이 되는 것은 아니라고 설명한다.",
      "자료가 제시한 이유는 신체와 지적 능력의 구별이다.",
      "피부를 대답의 필수조건으로 삼지 않는다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-3-1-03",
    "week": 3,
    "keyword": "3-1",
    "question": "미인 대회에 눈을 반짝이지 않는 기계의 예는 무엇을 설명하는가?",
    "choices": [
      "질문자가 피부를 관찰해야 함",
      "신체적 반응의 결여 때문에 게임에서 불리하지 않음",
      "기계가 눈빛을 인간처럼 복제해야 함",
      "기계가 감정의 존재를 증명했음",
      "인간에게 어떤 신체적 능력도 없음"
    ],
    "answer": 1,
    "explanation": "자료의 두 번째 이점인 사람·기계의 무능력 문제가 설명된다.",
    "choiceExplanations": [
      "겉모습 관찰을 요구하는 사례가 아니다.",
      "자료의 두 번째 이점인 사람·기계의 무능력 문제가 설명된다.",
      "그 반응이 없어도 불리하지 않다고 한다.",
      "그런 증명을 제시한 사례가 아니다.",
      "인간 일반의 무능력을 주장하지 않는다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-3-1-04",
    "week": 3,
    "keyword": "3-1",
    "question": "‘모방 게임은 기계에 너무 불리하다’는 비판에 튜링이 든 반대 사례는?",
    "choices": [
      "사람이 기계인 척하면 느리고 부정확해서 불리할 수 있다.",
      "사람은 기계의 모든 계산을 더 빨리 한다.",
      "모든 기계는 이미 게임을 통과했다.",
      "기계에 인공 피부를 씌우면 된다.",
      "대화 대신 신경세포만 검사하면 된다."
    ],
    "answer": 0,
    "explanation": "기계에만 불리하다고 볼 수 없다는 대응이다.",
    "choiceExplanations": [
      "기계에만 불리하다고 볼 수 없다는 대응이다.",
      "자료는 오히려 느리고 부정확한 수행을 든다.",
      "현재 모든 기계의 성공을 말하지 않는다.",
      "신체적 복제는 대응의 핵심이 아니다.",
      "모방 게임의 방식을 이렇게 바꾸지 않는다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-3-1-05",
    "week": 3,
    "keyword": "3-1",
    "question": "모방 게임의 장점으로 자료에 없는 것은?",
    "choices": [
      "신체적 능력과 지적 능력을 구별한다.",
      "인공 피부를 요구하지 않는다.",
      "특정 신체 반응이 없어도 불리하지 않다.",
      "눈빛 같은 반응의 결여를 판별 기준에서 제외한다.",
      "참가자의 두뇌 구조를 직접 확인한다."
    ],
    "answer": 4,
    "explanation": "직접 구조 검사 대신 문답으로 지적 수행을 다룬다.",
    "choiceExplanations": [
      "첫 번째 이점으로 명시된다.",
      "겉모습의 복제가 핵심 조건이 아니다.",
      "미인 대회의 예로 설명한다.",
      "두 번째 이점의 예에 해당한다.",
      "직접 구조 검사 대신 문답으로 지적 수행을 다룬다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-3-2-01",
    "week": 3,
    "keyword": "3-2",
    "question": "자료에서 인간 계산자는 무엇을 따라 계산한다고 가정되는가?",
    "choices": [
      "기호의 뜻을 직감해 규칙 없이 답함",
      "인간의 모든 신체 동작을 모방함",
      "지시표 없이 결과만 추측함",
      "고정된 규칙",
      "정해진 규칙을 매번 임의로 무시함"
    ],
    "answer": 3,
    "explanation": "고정 규칙을 따르며 그 규칙에서 벗어나지 않는다고 가정한다.",
    "choiceExplanations": [
      "자료의 계산자는 정해진 규칙에 따라 작동한다.",
      "계산 작동의 모방이지 모든 몸짓의 재현이 아니다.",
      "자료는 규칙과 지시표에 따른 계산을 설명한다.",
      "고정 규칙을 따르며 그 규칙에서 벗어나지 않는다고 가정한다.",
      "인간 계산자는 고정 규칙에서 벗어나지 않는다고 가정한다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-3-2-02",
    "week": 3,
    "keyword": "3-2",
    "question": "디지털 컴퓨터의 세 구성요소에 포함되지 않는 것은?",
    "choices": [
      "제어장치",
      "store",
      "교육 과정",
      "저장장치",
      "실행 장치"
    ],
    "answer": 2,
    "explanation": "교육 과정은 학습 기계 논의에 나오며 세 장치의 하나가 아니다.",
    "choiceExplanations": [
      "세 구성 부분 중 하나다.",
      "저장장치의 영어 표현이며 구성 부분이다.",
      "교육 과정은 학습 기계 논의에 나오며 세 장치의 하나가 아니다.",
      "세 구성 부분 중 하나다.",
      "세 구성 부분 중 하나다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-3-2-03",
    "week": 3,
    "keyword": "3-2",
    "question": "‘적절한 지시표를 기계에 넣어 작동 A를 하게 함’은?",
    "choices": [
      "자연종 외재론",
      "프로그래밍",
      "감각질 전도",
      "체계 내면화",
      "종 제한"
    ],
    "answer": 1,
    "explanation": "기계의 지시표를 구성하는 일을 프로그래밍이라고 한다.",
    "choiceExplanations": [
      "단어의 의미와 환경의 관계를 다룬다.",
      "기계의 지시표를 구성하는 일을 프로그래밍이라고 한다.",
      "경험의 질이 뒤바뀌는 사고실험이다.",
      "중국어방의 체계 비판에 대한 써얼의 응답이다.",
      "제한적 유형 동일론의 적용 기준이다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-3-2-04",
    "week": 3,
    "keyword": "3-2",
    "question": "실제 컴퓨터와 무한 저장장치에 관한 튜링의 설명은?",
    "choices": [
      "실제 장치는 대개 유한하지만 무한 저장을 가정하는 이론적 어려움은 없다.",
      "실제 장치는 모두 무한 저장장치를 갖는다.",
      "유한 저장장치는 프로그램을 실행할 수 없다.",
      "무한 저장을 생각하는 것 자체가 불가능하다.",
      "저장장치는 컴퓨터의 구성요소가 아니다."
    ],
    "answer": 0,
    "explanation": "현실의 한정성과 이론적 가정을 구별한다.",
    "choiceExplanations": [
      "현실의 한정성과 이론적 가정을 구별한다.",
      "자료는 대부분 실제 컴퓨터의 저장장치가 한정된다고 한다.",
      "실제 컴퓨터는 한정된 저장장치로 작동한다.",
      "자료는 이론적인 어려움은 없다고 한다.",
      "저장장치는 세 구성 부분 중 하나다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-3-2-05",
    "week": 3,
    "keyword": "3-2",
    "question": "‘이산상태 기계’에 대한 자료의 설명은?",
    "choices": [
      "모든 물리적 변화가 본래 완전히 끊겨 있다.",
      "표가 있어도 작동을 계산할 수 없다.",
      "저장장치가 없는 기계만 가리킨다.",
      "연속적 신경 체계와 같은 말이다.",
      "연속적 변화가 있어도 편의상 이산적으로 취급할 수 있다."
    ],
    "answer": 4,
    "explanation": "조명 켜고 끄기의 중간 단계를 무시하는 예를 든다.",
    "choiceExplanations": [
      "엄밀히는 모든 것이 연속적으로 움직인다고 설명한다.",
      "상태에 대응하는 표가 주어지면 작동을 예측할 수 있다고 한다.",
      "저장장치의 부재를 정의로 삼지 않는다.",
      "연속과 이산의 구별이 반론의 쟁점이 된다.",
      "조명 켜고 끄기의 중간 단계를 무시하는 예를 든다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-3-2-06",
    "week": 3,
    "keyword": "3-2",
    "question": "보편 기계가 흉내낼 수 있는 것으로 자료가 명시한 범위는?",
    "choices": [
      "오직 자기와 동일한 외형의 기계",
      "기호를 쓰지 않는 신의 작용",
      "확률과 상관없이 모든 예측",
      "임의의 이산상태 기계",
      "프로그램 없이 모든 생명 현상"
    ],
    "answer": 3,
    "explanation": "충분한 속도와 적절한 저장 용량 등이 전제된다.",
    "choiceExplanations": [
      "외형의 동일성을 조건으로 삼지 않는다.",
      "자료의 보편성 범위가 아니다.",
      "모든 문제의 무조건적 해결을 뜻하지 않는다.",
      "충분한 속도와 적절한 저장 용량 등이 전제된다.",
      "프로그램과 계산 조건을 요구한다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-3-2-07",
    "week": 3,
    "keyword": "3-2",
    "question": "하나의 디지털 컴퓨터로 여러 계산을 수행하려면 각 경우 무엇을 바꾸는가?",
    "choices": [
      "신의 조율 시점",
      "모든 기계의 재질을 하나로 통일",
      "적절한 프로그램",
      "인간과 같은 피부",
      "비물리적 정신 실체"
    ],
    "answer": 2,
    "explanation": "다양한 계산마다 물리적으로 다른 기계를 만들 필요가 없다.",
    "choiceExplanations": [
      "예정조화론의 개념이다.",
      "보편성은 모든 재질이 같다는 주장이 아니다.",
      "다양한 계산마다 물리적으로 다른 기계를 만들 필요가 없다.",
      "피부는 계산의 보편성 조건이 아니다.",
      "디지털 컴퓨터의 프로그램 설명과 다르다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-3-2-08",
    "week": 3,
    "keyword": "3-2",
    "question": "보편성 설명에서 충분해야 한다고 명시한 두 자원은?",
    "choices": [
      "노트와 현대미술관",
      "동작 속도와 저장 용량",
      "인공 피부와 눈빛",
      "감각질과 영혼",
      "고통과 근심"
    ],
    "answer": 1,
    "explanation": "적절한 속도와 저장 용량이 있어야 이산상태 기계를 모방할 수 있다.",
    "choiceExplanations": [
      "확장된 마음의 사례다.",
      "적절한 속도와 저장 용량이 있어야 이산상태 기계를 모방할 수 있다.",
      "지적 수행과 신체 능력을 구별한다.",
      "보편성의 기술적 조건이 아니다.",
      "기능주의의 내적 연결 예다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-3-3-01",
    "week": 3,
    "keyword": "3-3",
    "question": "게임 참가 기계를 디지털 컴퓨터로 한정한 배경은?",
    "choices": [
      "생각하는 기계에 대한 관심이 디지털 컴퓨터의 등장 뒤 생겼기 때문",
      "모든 기계가 디지털임이 증명되었기 때문",
      "생물학적 신경만 허용하기 때문",
      "모든 사람이 컴퓨터이기 때문",
      "실험적 기계의 작동이 금지되기 때문"
    ],
    "answer": 0,
    "explanation": "자료에 제시된 한정 이유이다.",
    "choiceExplanations": [
      "자료에 제시된 한정 이유이다.",
      "기계 일반을 디지털과 동일시하지 않는다.",
      "게임 참가자를 생물학적 신경계로 한정하지 않는다.",
      "일반적으로 태어난 사람은 기계 정의에서 제외하려 한다.",
      "실험적 방법으로 만든 기계도 허용하려 한다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-3-3-02",
    "week": 3,
    "keyword": "3-3",
    "question": "공학자가 원하는 기계 정의의 조건은?",
    "choices": [
      "설명되지 않은 내부 작동은 모두 금지",
      "하나의 공학 기술만 허용",
      "일반적으로 태어난 사람을 반드시 포함",
      "디지털 컴퓨터는 모두 현재 시험을 통과해야 함",
      "제작자가 작동을 충분히 설명하지 못하는 실험적 장치도 허용"
    ],
    "answer": 4,
    "explanation": "실험적으로 작동하는 기계도 배제하지 않는다.",
    "choiceExplanations": [
      "실험적 기계를 허용한다는 조건과 반대다.",
      "모든 종류의 공학 기술을 허용하려 한다.",
      "자료는 그런 사람을 제외한다.",
      "실제 모든 컴퓨터의 성공이 정의 조건은 아니다.",
      "실험적으로 작동하는 기계도 배제하지 않는다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-3-3-03",
    "week": 3,
    "keyword": "3-3",
    "question": "공학자가 원하는 기계 정의에서 제외하려는 대상은?",
    "choices": [
      "여러 공학 기술을 적용한 기계",
      "제작자가 작동을 완전히 기술하지 못하는 기계",
      "디지털 컴퓨터",
      "일반적인 방식으로 태어난 사람",
      "실험적 방법으로 제작한 기계"
    ],
    "answer": 3,
    "explanation": "자료의 세 번째 조건이다.",
    "choiceExplanations": [
      "첫 번째 조건에서 허용하려 한다.",
      "이런 실험적 기계도 허용하려 한다.",
      "게임 참여 대상을 오히려 디지털 컴퓨터로 한정한다.",
      "자료의 세 번째 조건이다.",
      "두 번째 조건에서 허용하려 한다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-3-3-04",
    "week": 3,
    "keyword": "3-3",
    "question": "튜링이 묻는 것은 어떤 컴퓨터의 가능성인가?",
    "choices": [
      "프로그램이 전혀 없는 컴퓨터",
      "인간과 같은 외모만 가진 컴퓨터",
      "모방 게임을 잘 해낼 수 있는 상상가능한 컴퓨터",
      "현재의 모든 컴퓨터가 이미 생각함",
      "오직 계산 속도가 가장 느린 컴퓨터"
    ],
    "answer": 2,
    "explanation": "모든 현재 컴퓨터가 잘하는가가 아니라 그런 컴퓨터가 가능한가이다.",
    "choiceExplanations": [
      "게임을 수행할 적절한 프로그램을 고려한다.",
      "외모의 동일성이 핵심이 아니다.",
      "모든 현재 컴퓨터가 잘하는가가 아니라 그런 컴퓨터가 가능한가이다.",
      "실제 모든 장치의 성공을 주장하지 않는다.",
      "느림 자체를 조건으로 삼지 않는다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-3-3-05",
    "week": 3,
    "keyword": "3-3",
    "question": "저장 용량과 속도 외에 튜링이 게임 수행에 요구한 것은?",
    "choices": [
      "인간과 같은 생물학적 몸",
      "적절한 프로그램",
      "인공 피부",
      "모든 상황을 설명하는 신학",
      "무조건 무한한 출력"
    ],
    "answer": 1,
    "explanation": "자료는 저장 용량·속도·프로그램을 갖추도록 수정하는 경우를 묻는다.",
    "choiceExplanations": [
      "디지털 컴퓨터로 게임을 수행할 가능성을 묻는다.",
      "자료는 저장 용량·속도·프로그램을 갖추도록 수정하는 경우를 묻는다.",
      "신체적 복제를 핵심 조건으로 삼지 않는다.",
      "수정 조건에 해당하지 않는다.",
      "적절한 응답을 만드는 프로그램이 필요하다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-3-4-01",
    "week": 3,
    "keyword": "3-4",
    "question": "“사고는 인간에게 주어진 영혼의 기능이다.”라는 주장은?",
    "choices": [
      "신학적 반대",
      "현실도피적 반대",
      "수학적 반대",
      "의식과 관련한 반대",
      "할 수 없는 것과 관련한 반대"
    ],
    "answer": 0,
    "explanation": "생각을 인간에게 부여된 불멸의 영혼의 기능으로 본다.",
    "choiceExplanations": [
      "생각을 인간에게 부여된 불멸의 영혼의 기능으로 본다.",
      "기계가 생각하는 귀결이 무서우니 그렇지 않기를 바라는 주장이다.",
      "이산상태 기계의 능력에 수학적 한계가 있다는 지적이다.",
      "진정한 사고와 정서가 있어야 기계를 두뇌와 같다고 인정한다.",
      "기계가 친절함·실수 등 인간의 여러 행동을 할 수 없다고 주장한다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-3-4-02",
    "week": 3,
    "keyword": "3-4",
    "question": "“기계가 생각하면 무서우니 그렇지 않다고 믿자.”는?",
    "choices": [
      "수학적 반대",
      "의식과 관련한 반대",
      "할 수 없는 것과 관련한 반대",
      "러브리스의 반대",
      "현실도피적 반대"
    ],
    "answer": 4,
    "explanation": "기계가 생각하는 귀결이 무서우니 그렇지 않기를 바라는 주장이다.",
    "choiceExplanations": [
      "이산상태 기계의 능력에 수학적 한계가 있다는 지적이다.",
      "진정한 사고와 정서가 있어야 기계를 두뇌와 같다고 인정한다.",
      "기계가 친절함·실수 등 인간의 여러 행동을 할 수 없다고 주장한다.",
      "기계는 시킨 것만 하며 새로운 것이나 놀라움을 줄 수 없다는 주장이다.",
      "기계가 생각하는 귀결이 무서우니 그렇지 않기를 바라는 주장이다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-3-4-03",
    "week": 3,
    "keyword": "3-4",
    "question": "“기계가 할 수 없는 것이 수학적으로 드러난다.”라는 반론은?",
    "choices": [
      "할 수 없는 것과 관련한 반대",
      "러브리스의 반대",
      "신경 체계의 연속성에 근거한 반대",
      "수학적 반대",
      "의식과 관련한 반대"
    ],
    "answer": 3,
    "explanation": "이산상태 기계의 능력에 수학적 한계가 있다는 지적이다.",
    "choiceExplanations": [
      "기계가 친절함·실수 등 인간의 여러 행동을 할 수 없다고 주장한다.",
      "기계는 시킨 것만 하며 새로운 것이나 놀라움을 줄 수 없다는 주장이다.",
      "연속적인 신경 체계를 이산상태 기계가 흉내낼 수 없다는 주장이다.",
      "이산상태 기계의 능력에 수학적 한계가 있다는 지적이다.",
      "진정한 사고와 정서가 있어야 기계를 두뇌와 같다고 인정한다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-3-4-04",
    "week": 3,
    "keyword": "3-4",
    "question": "“소네트를 사고와 정서로 써야 진정한 지능이다.”라는 반론은?",
    "choices": [
      "신경 체계의 연속성에 근거한 반대",
      "행동의 비-정형성에 근거한 반대",
      "의식과 관련한 반대",
      "할 수 없는 것과 관련한 반대",
      "러브리스의 반대"
    ],
    "answer": 2,
    "explanation": "진정한 사고와 정서가 있어야 기계를 두뇌와 같다고 인정한다.",
    "choiceExplanations": [
      "연속적인 신경 체계를 이산상태 기계가 흉내낼 수 없다는 주장이다.",
      "모든 상황의 인간 행동을 포괄하는 규칙을 만들 수 없다는 주장이다.",
      "진정한 사고와 정서가 있어야 기계를 두뇌와 같다고 인정한다.",
      "기계가 친절함·실수 등 인간의 여러 행동을 할 수 없다고 주장한다.",
      "기계는 시킨 것만 하며 새로운 것이나 놀라움을 줄 수 없다는 주장이다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-3-4-05",
    "week": 3,
    "keyword": "3-4",
    "question": "“기계는 친절할 수도, 실수할 수도 없다.”라는 비판의 분류는?",
    "choices": [
      "의식과 관련한 반대",
      "할 수 없는 것과 관련한 반대",
      "신학적 반대",
      "현실도피적 반대",
      "수학적 반대"
    ],
    "answer": 1,
    "explanation": "기계가 친절함·실수 등 인간의 여러 행동을 할 수 없다고 주장한다.",
    "choiceExplanations": [
      "진정한 사고와 정서가 있어야 기계를 두뇌와 같다고 인정한다.",
      "기계가 친절함·실수 등 인간의 여러 행동을 할 수 없다고 주장한다.",
      "생각을 인간에게 부여된 불멸의 영혼의 기능으로 본다.",
      "기계가 생각하는 귀결이 무서우니 그렇지 않기를 바라는 주장이다.",
      "이산상태 기계의 능력에 수학적 한계가 있다는 지적이다."
    ],
    "sourcePage": 5
  },
  {
    "id": "easy-3-4-06",
    "week": 3,
    "keyword": "3-4",
    "question": "“기계는 우리가 시킨 것만 한다.”라는 반론의 이름은?",
    "choices": [
      "러브리스의 반대",
      "현실도피적 반대",
      "수학적 반대",
      "의식과 관련한 반대",
      "할 수 없는 것과 관련한 반대"
    ],
    "answer": 0,
    "explanation": "기계는 시킨 것만 하며 새로운 것이나 놀라움을 줄 수 없다는 주장이다.",
    "choiceExplanations": [
      "기계는 시킨 것만 하며 새로운 것이나 놀라움을 줄 수 없다는 주장이다.",
      "기계가 생각하는 귀결이 무서우니 그렇지 않기를 바라는 주장이다.",
      "이산상태 기계의 능력에 수학적 한계가 있다는 지적이다.",
      "진정한 사고와 정서가 있어야 기계를 두뇌와 같다고 인정한다.",
      "기계가 친절함·실수 등 인간의 여러 행동을 할 수 없다고 주장한다."
    ],
    "sourcePage": 5
  },
  {
    "id": "easy-3-4-07",
    "week": 3,
    "keyword": "3-4",
    "question": "“신경 체계는 연속적이므로 디지털 기계로 모방할 수 없다.”는?",
    "choices": [
      "수학적 반대",
      "의식과 관련한 반대",
      "할 수 없는 것과 관련한 반대",
      "러브리스의 반대",
      "신경 체계의 연속성에 근거한 반대"
    ],
    "answer": 4,
    "explanation": "연속적인 신경 체계를 이산상태 기계가 흉내낼 수 없다는 주장이다.",
    "choiceExplanations": [
      "이산상태 기계의 능력에 수학적 한계가 있다는 지적이다.",
      "진정한 사고와 정서가 있어야 기계를 두뇌와 같다고 인정한다.",
      "기계가 친절함·실수 등 인간의 여러 행동을 할 수 없다고 주장한다.",
      "기계는 시킨 것만 하며 새로운 것이나 놀라움을 줄 수 없다는 주장이다.",
      "연속적인 신경 체계를 이산상태 기계가 흉내낼 수 없다는 주장이다."
    ],
    "sourcePage": 5
  },
  {
    "id": "easy-3-4-08",
    "week": 3,
    "keyword": "3-4",
    "question": "“모든 상황에서의 인간 행동을 기술하는 규칙은 만들 수 없다.”는?",
    "choices": [
      "할 수 없는 것과 관련한 반대",
      "러브리스의 반대",
      "신경 체계의 연속성에 근거한 반대",
      "행동의 비-정형성에 근거한 반대",
      "의식과 관련한 반대"
    ],
    "answer": 3,
    "explanation": "모든 상황의 인간 행동을 포괄하는 규칙을 만들 수 없다는 주장이다.",
    "choiceExplanations": [
      "기계가 친절함·실수 등 인간의 여러 행동을 할 수 없다고 주장한다.",
      "기계는 시킨 것만 하며 새로운 것이나 놀라움을 줄 수 없다는 주장이다.",
      "연속적인 신경 체계를 이산상태 기계가 흉내낼 수 없다는 주장이다.",
      "모든 상황의 인간 행동을 포괄하는 규칙을 만들 수 없다는 주장이다.",
      "진정한 사고와 정서가 있어야 기계를 두뇌와 같다고 인정한다."
    ],
    "sourcePage": 5
  },
  {
    "id": "easy-3-4-09",
    "week": 3,
    "keyword": "3-4",
    "question": "“텔레파시가 있다면 이 판별 실험은 어떻게 되는가?”라는 반론은?",
    "choices": [
      "수학적 반대",
      "의식과 관련한 반대",
      "초감각 지각에 근거한 반대",
      "신학적 반대",
      "현실도피적 반대"
    ],
    "answer": 2,
    "explanation": "텔레파시 등 초감각 지각이 모방 게임에 미칠 문제를 제기한다.",
    "choiceExplanations": [
      "이산상태 기계의 능력에 수학적 한계가 있다는 지적이다.",
      "진정한 사고와 정서가 있어야 기계를 두뇌와 같다고 인정한다.",
      "텔레파시 등 초감각 지각이 모방 게임에 미칠 문제를 제기한다.",
      "생각을 인간에게 부여된 불멸의 영혼의 기능으로 본다.",
      "기계가 생각하는 귀결이 무서우니 그렇지 않기를 바라는 주장이다."
    ],
    "sourcePage": 5
  },
  {
    "id": "easy-3-4-10",
    "week": 3,
    "keyword": "3-4",
    "question": "신학적 반대에 대한 튜링의 핵심 응답은?",
    "choices": [
      "영혼이 없으면 계산도 불가능하다.",
      "신이 기계에 영혼을 줄 자유를 제한하면 안 된다.",
      "신은 어떤 존재에게도 영혼을 주지 않는다.",
      "기계는 이미 모두 영혼을 가졌다.",
      "사고와 영혼이 같은 말임을 증명했다."
    ],
    "answer": 1,
    "explanation": "기계에 영혼을 부여할 수 없다고 단정하는 것은 신의 전능성을 제한한다.",
    "choiceExplanations": [
      "튜링의 응답이 아니다.",
      "기계에 영혼을 부여할 수 없다고 단정하는 것은 신의 전능성을 제한한다.",
      "자료의 대응은 신의 부여 능력을 제한하지 말자는 것이다.",
      "모든 기계의 영혼을 확인했다는 주장이 아니다.",
      "그런 정의 증명이 아니라 반론의 신학적 전제를 되묻는다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-3-4-11",
    "week": 3,
    "keyword": "3-4",
    "question": "현실도피적 반대를 튜링이 약하게 본 이유는?",
    "choices": [
      "인간의 우월성을 바라는 욕망에 기대기 때문",
      "기계의 계산 한계를 수학적으로 증명했기 때문",
      "신경 체계의 연속성을 입증했기 때문",
      "프로그램의 저장 크기를 계산했기 때문",
      "다른 사람의 마음을 직접 경험했기 때문"
    ],
    "answer": 0,
    "explanation": "반박할 만한 실질적 논증으로 보지 않는다.",
    "choiceExplanations": [
      "반박할 만한 실질적 논증으로 보지 않는다.",
      "수학적 반대와 다르다.",
      "연속성 반대와 다르다.",
      "그런 계산에 근거한 반대가 아니다.",
      "타인의 직접 경험을 근거로 하지 않는다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-3-4-12",
    "week": 3,
    "keyword": "3-4",
    "question": "수학적 반대에 맞서 튜링이 인간에 대해 인정한 것은?",
    "choices": [
      "인간은 어떤 문제에서도 무오류이다.",
      "인간은 모두 모든 기계보다 영리하다.",
      "인간은 수학을 전혀 못 한다.",
      "인간의 지능은 저장 용량과 동일하다.",
      "인간도 질문에 틀린 답을 한다."
    ],
    "answer": 4,
    "explanation": "특정 기계의 오류가 인간 일반의 절대 우월성을 입증하지 않는다.",
    "choiceExplanations": [
      "튜링은 인간도 오류를 범한다고 한다.",
      "더 영리한 기계가 있을 수도 있다고 답한다.",
      "인간의 수학 능력 전체를 부정하지 않는다.",
      "자료의 대응이 아니다.",
      "특정 기계의 오류가 인간 일반의 절대 우월성을 입증하지 않는다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-3-4-13",
    "week": 3,
    "keyword": "3-4",
    "question": "의식 반론의 극단적 기준을 인간에게도 적용하면 빠지는 입장은?",
    "choices": [
      "자연종 외재론",
      "유형 동일론",
      "정보 실재론",
      "유아론",
      "예정조화론"
    ],
    "answer": 3,
    "explanation": "자기 경험만으로 사고를 인정하면 다른 사람의 마음도 인정하기 어렵다.",
    "choiceExplanations": [
      "단어의 의미와 환경에 관한 입장이다.",
      "심적 유형과 뇌 유형의 동일성이다.",
      "유전자 정보의 지위를 논하는 입장이다.",
      "자기 경험만으로 사고를 인정하면 다른 사람의 마음도 인정하기 어렵다.",
      "단자의 사전 조화에 관한 이론이다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-3-4-14",
    "week": 3,
    "keyword": "3-4",
    "question": "기계의 ‘기능의 오류’에 해당하는 것은?",
    "choices": [
      "규칙에 따라 틀린 산수 답을 내도록 함",
      "참이 아닌 결론을 산출함",
      "기계적·전기적 결함으로 인한 고장",
      "거짓 명제를 출력함",
      "사실의 모든 귀결을 모름"
    ],
    "answer": 2,
    "explanation": "기능의 오류는 장치 자체의 결함과 관련된다.",
    "choiceExplanations": [
      "작동 고장이 아니라 결과의 오류가 될 수 있다.",
      "명제의 오류는 결과의 오류다.",
      "기능의 오류는 장치 자체의 결함과 관련된다.",
      "출력에 의미를 부여했을 때의 결과의 오류다.",
      "놀라움을 부정하는 가정의 문제와 관련된다."
    ],
    "sourcePage": 5
  },
  {
    "id": "easy-3-4-15",
    "week": 3,
    "keyword": "3-4",
    "question": "기계의 ‘결과의 오류’를 판단하는 데 필요한 것은?",
    "choices": [
      "교사의 모든 경험을 확인함",
      "출력 신호에 의미를 부여함",
      "장치의 전기 고장만 조사함",
      "외형이 사람과 같은지 조사함",
      "신경 체계의 연속성만 조사함"
    ],
    "answer": 1,
    "explanation": "그릇된 명제를 출력하는지를 보아 결과의 오류를 말한다.",
    "choiceExplanations": [
      "결과의 오류를 정의하는 조건이 아니다.",
      "그릇된 명제를 출력하는지를 보아 결과의 오류를 말한다.",
      "전기적 결함은 기능의 오류다.",
      "결과의 진리와 외형은 별개다.",
      "다른 반론의 쟁점이다."
    ],
    "sourcePage": 5
  },
  {
    "id": "easy-3-4-16",
    "week": 3,
    "keyword": "3-4",
    "question": "산수에서 너무 정확해 들통나는 기계에 대해 튜링이 제안한 방법은?",
    "choices": [
      "질문자를 혼동시키도록 계산 실수를 도입",
      "질문자와 통신을 모두 중단",
      "인공 피부를 더함",
      "전기 고장을 반드시 일으킴",
      "계산 프로그램을 모두 없앰"
    ],
    "answer": 0,
    "explanation": "기계가 틀린 결과를 낼 수 없다는 주장을 반박하는 사례다.",
    "choiceExplanations": [
      "기계가 틀린 결과를 낼 수 없다는 주장을 반박하는 사례다.",
      "게임의 문답을 없애자는 제안이 아니다.",
      "정확성 문제에 대한 응답이 아니다.",
      "결과의 오류는 기능 고장 없이도 가능하다.",
      "적절하게 틀린 답을 내도록 하는 제안이다."
    ],
    "sourcePage": 5
  },
  {
    "id": "easy-3-4-17",
    "week": 3,
    "keyword": "3-4",
    "question": "러브리스 반대에 대한 튜링의 관찰은?",
    "choices": [
      "기계는 누구에게도 놀라움을 주지 못한다.",
      "모든 기계가 매번 새로운 것을 만든다.",
      "인간만 자신의 모든 귀결을 즉시 안다.",
      "기계의 모든 출력은 처음부터 사람에게 알려져 있다.",
      "기계는 실제로 종종 우리를 놀라게 한다."
    ],
    "answer": 4,
    "explanation": "새로움과 놀라움의 불가능성을 부정한다.",
    "choiceExplanations": [
      "이는 반대자의 주장이다.",
      "그런 보편적 새로움을 주장하지 않는다.",
      "모든 귀결을 안다는 가정 자체를 문제 삼는다.",
      "튜링이 비판하는 가정과 연결된다.",
      "새로움과 놀라움의 불가능성을 부정한다."
    ],
    "sourcePage": 5
  },
  {
    "id": "easy-3-4-18",
    "week": 3,
    "keyword": "3-4",
    "question": "기계의 놀라움을 부정하는 견해가 의존한 잘못된 가정은?",
    "choices": [
      "계산에는 시간이 필요할 수 있다.",
      "프로그램을 바꿀 수 있다.",
      "기계에 저장장치가 있다.",
      "어떤 사실을 알면 모든 귀결도 동시에 안다.",
      "사람도 종종 오류를 범한다."
    ],
    "answer": 3,
    "explanation": "사실의 지식이 그 모든 귀결의 즉각적 지식을 뜻하지 않는다.",
    "choiceExplanations": [
      "모든 귀결의 즉각적 인식을 가정하는 것이 쟁점이다.",
      "프로그램 변경 가능성이 잘못된 가정이라는 설명은 없다.",
      "저장장치는 컴퓨터의 구성요소다.",
      "사실의 지식이 그 모든 귀결의 즉각적 지식을 뜻하지 않는다.",
      "이는 튜링이 인정하는 점이다."
    ],
    "sourcePage": 5
  },
  {
    "id": "easy-3-4-19",
    "week": 3,
    "keyword": "3-4",
    "question": "연속성 반론에서 튜링은 무엇을 구별하는가?",
    "choices": [
      "물리 지식과 감각질 지식",
      "형식 기호와 중국어 책만",
      "정확한 내부 값의 예측과 게임에서의 판별",
      "기계의 고장과 프로그램 이름만",
      "영혼의 종류와 신의 능력"
    ],
    "answer": 2,
    "explanation": "연속적 장치의 출력을 정확히 예측하지 못해도 게임에서 구별하기는 어렵다고 한다.",
    "choiceExplanations": [
      "메리 논증의 쟁점이다.",
      "중국어방의 설정이다.",
      "연속적 장치의 출력을 정확히 예측하지 못해도 게임에서 구별하기는 어렵다고 한다.",
      "이 반론은 연속·이산 및 판별의 관계를 다룬다.",
      "신학적 반대의 쟁점이다."
    ],
    "sourcePage": 5
  },
  {
    "id": "easy-3-4-20",
    "week": 3,
    "keyword": "3-4",
    "question": "비-정형성 반론에서 ‘빨간 신호를 보면 서라’는 어떤 예인가?",
    "choices": [
      "수학적 한계",
      "행동의 규칙",
      "행위의 법칙",
      "기능의 오류",
      "결과의 오류"
    ],
    "answer": 1,
    "explanation": "따라야 할 행동 지침의 예이며 행위의 법칙과 구별된다.",
    "choiceExplanations": [
      "기계의 수학적 능력 한계가 아니다.",
      "따라야 할 행동 지침의 예이며 행위의 법칙과 구별된다.",
      "자료는 이 예를 행동의 규칙으로 제시한다.",
      "장치 고장의 사례가 아니다.",
      "명제 출력의 오류를 분류하는 예가 아니다."
    ],
    "sourcePage": 5
  },
  {
    "id": "easy-3-4-21",
    "week": 3,
    "keyword": "3-4",
    "question": "행동 예측에 대한 튜링의 답변으로 맞는 것은?",
    "choices": [
      "완전한 예측의 어려움만으로 기계가 아님을 결론 낼 수 없다.",
      "예측할 수 없는 것은 언제나 비기계이다.",
      "모든 인간 행동은 실제로 완벽히 예측된다.",
      "법칙이 있으면 누구나 출력을 즉시 안다.",
      "행동의 규칙과 행위의 법칙은 같다."
    ],
    "answer": 0,
    "explanation": "기계의 출력도 예측하기 어려운 예를 제시한다.",
    "choiceExplanations": [
      "기계의 출력도 예측하기 어려운 예를 제시한다.",
      "튜링은 기계 출력의 예측도 어려울 수 있다고 답한다.",
      "튜링은 인간 행동의 완전 예측에 동의하지 않는다.",
      "법칙과 실제 예측 능력을 구별해야 한다.",
      "두 표현을 혼동하는 것이 반론의 문제라고 본다."
    ],
    "sourcePage": 5
  },
  {
    "id": "easy-3-4-22",
    "week": 3,
    "keyword": "3-4",
    "question": "초감각 지각 반론에 대해 자료에 소개된 튜링의 제안은?",
    "choices": [
      "사고 실험에서 모든 문답을 금지",
      "기계에 불멸의 영혼을 넣음",
      "기계의 저장장치를 제거",
      "소네트만 질문하도록 제한",
      "경쟁자를 텔레파시 방지 방에 둠"
    ],
    "answer": 4,
    "explanation": "당시 반론에 대한 시험 조건 제안이며 초감각 지각의 실재를 입증한 것이 아니다.",
    "choiceExplanations": [
      "문답을 없애자는 것이 아니다.",
      "신학적 논의와 다른 제안이다.",
      "대응 조건으로 제시되지 않는다.",
      "의식 반론의 예와 섞인 설명이다.",
      "당시 반론에 대한 시험 조건 제안이며 초감각 지각의 실재를 입증한 것이 아니다."
    ],
    "sourcePage": 5
  },
  {
    "id": "easy-3-4-23",
    "week": 3,
    "keyword": "3-4",
    "question": "튜링의 의식 반론 대응을 옳게 설명한 것은?",
    "choices": [
      "의식이 있으면 생물학적 신경이 없어야 한다.",
      "의식과 계산 속도는 같은 뜻이라고 한다.",
      "모든 기계에 주관적 감정이 있음을 선언한다.",
      "타인의 마음을 인정할 때도 같은 극단적 기준을 요구하는지 묻는다.",
      "기계가 느끼는 정서를 직접 측정했다고 보고한다."
    ],
    "answer": 3,
    "explanation": "그 기준을 일반화하면 유아론이 된다고 지적한다.",
    "choiceExplanations": [
      "자료의 주장이 아니다.",
      "두 개념을 동일시하지 않는다.",
      "그런 보편적 실재 주장이 아니라 판정 기준을 비판한다.",
      "그 기준을 일반화하면 유아론이 된다고 지적한다.",
      "직접 측정 결과를 제시한 응답이 아니다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-3-4-24",
    "week": 3,
    "keyword": "3-4",
    "question": "아홉 반론 중 이름과 핵심 내용이 잘못 연결된 것은?",
    "choices": [
      "현실도피적 반대—기계 사고에 대한 두려움",
      "초감각 지각 반대—텔레파시",
      "러브리스—신경 체계의 연속성",
      "신학적 반대—인간의 영혼",
      "수학적 반대—기계 능력의 한계"
    ],
    "answer": 2,
    "explanation": "러브리스는 기계의 새로움·놀라움을 부정하는 반대다.",
    "choiceExplanations": [
      "두려움과 인간 우월성에 대한 욕망에 기대는 주장이다.",
      "자료의 아홉 번째 반론이다.",
      "러브리스는 기계의 새로움·놀라움을 부정하는 반대다.",
      "생각을 영혼의 기능으로 본다.",
      "수학적 정리로 기계의 한계를 지적한다."
    ],
    "sourcePage": 5
  },
  {
    "id": "easy-3-4-25",
    "week": 3,
    "keyword": "3-4",
    "question": "튜링의 반론 대응에서 ‘기능 고장 없이 틀린 명제 출력’은 가능한가?",
    "choices": [
      "텔레파시가 입증되어야 가능하다.",
      "가능하다. 결과의 오류와 기능의 오류는 다르다.",
      "불가능하다. 두 오류는 같은 뜻이다.",
      "가능하려면 반드시 전기 고장이 있어야 한다.",
      "사람에게만 가능한 현상이다."
    ],
    "answer": 1,
    "explanation": "정상 작동하는 기계도 거짓 명제를 출력할 수 있다.",
    "choiceExplanations": [
      "초감각 지각 반론과 무관한 구별이다.",
      "정상 작동하는 기계도 거짓 명제를 출력할 수 있다.",
      "자료는 두 오류를 구별한다.",
      "결과의 오류가 항상 고장을 요구하지 않는다.",
      "기계도 결과의 오류를 범할 수 있다는 대응이다."
    ],
    "sourcePage": 5
  },
  {
    "id": "easy-3-4-26",
    "week": 3,
    "keyword": "3-4",
    "question": "수학적 반론에 대한 답변에서 더 영리한 기계의 가능성이 중요한 이유는?",
    "choices": [
      "한 기계의 한계를 모든 기계의 한계로 확대하지 않게 한다.",
      "모든 인간이 계산을 못 함을 보이므로",
      "신학적 전제를 입증하므로",
      "모든 기계가 동일한 답만 내므로",
      "의식이 전혀 없다는 것을 증명하므로"
    ],
    "answer": 0,
    "explanation": "특정 기계보다 영리한 사람보다 더 영리한 다른 기계가 있을 수 있다고 답한다.",
    "choiceExplanations": [
      "특정 기계보다 영리한 사람보다 더 영리한 다른 기계가 있을 수 있다고 답한다.",
      "인간 능력을 전부 부정하지 않는다.",
      "이 답변은 수학적 한계의 일반화를 문제 삼는다.",
      "그런 동일한 출력을 주장하지 않는다.",
      "의식 부재를 입증한 논증이 아니다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-3-5-01",
    "week": 3,
    "keyword": "3-5",
    "question": "성인 프로그램 대신 튜링이 먼저 모의하자고 제안한 것은?",
    "choices": [
      "생물의 분자구조만",
      "신의 무한 지성",
      "완성된 성인의 모든 경험만",
      "중국어를 이해하는 방 전체",
      "아이의 지성"
    ],
    "answer": 4,
    "explanation": "아이-프로그램을 만든 뒤 교육하는 접근이다.",
    "choiceExplanations": [
      "학습 기계 구상의 대상이 아니다.",
      "자료의 프로그램 구상이 아니다.",
      "성인 프로그램을 직접 만드는 대신 아이에서 출발한다.",
      "써얼의 별도 사고실험이다.",
      "아이-프로그램을 만든 뒤 교육하는 접근이다."
    ],
    "sourcePage": 5
  },
  {
    "id": "easy-3-5-02",
    "week": 3,
    "keyword": "3-5",
    "question": "성인 지성의 형성 요소에 들어가지 않는 것은?",
    "choices": [
      "받아온 교육",
      "교육 외 경험",
      "탄생 시의 마음 상태",
      "디지털 컴퓨터의 전기 고장",
      "마음의 초기 상태"
    ],
    "answer": 3,
    "explanation": "자료의 세 요소는 초기 상태·교육·교육 외 경험이다.",
    "choiceExplanations": [
      "두 번째 요소다.",
      "세 번째 요소다.",
      "마음의 초기 상태를 뜻한다.",
      "자료의 세 요소는 초기 상태·교육·교육 외 경험이다.",
      "탄생 시의 초기 상태가 첫 요소이다."
    ],
    "sourcePage": 5
  },
  {
    "id": "easy-3-5-03",
    "week": 3,
    "keyword": "3-5",
    "question": "아이-기계를 만드는 문제는 무엇과 무엇으로 나뉘는가?",
    "choices": [
      "신과 단자",
      "내포와 외연",
      "아이-프로그램과 교육 과정",
      "고통과 가려움",
      "정보량과 진리 조건만"
    ],
    "answer": 2,
    "explanation": "초기 기계를 구성하고 교육한다.",
    "choiceExplanations": [
      "예정조화론의 개념이다.",
      "단어의 의미 구별이다.",
      "초기 기계를 구성하고 교육한다.",
      "혼선된 두뇌의 두 메커니즘이다.",
      "드레츠키 논의의 조건이다."
    ],
    "sourcePage": 6
  },
  {
    "id": "easy-3-5-04",
    "week": 3,
    "keyword": "3-5",
    "question": "진화 유비에서 아이-기계의 구조는 무엇에 대응하는가?",
    "choices": [
      "결과의 오류",
      "유전 물질",
      "변이",
      "자연선택",
      "교육 외 경험"
    ],
    "answer": 1,
    "explanation": "구조는 유전 물질, 변경은 변이, 판정은 자연선택이다.",
    "choiceExplanations": [
      "출력의 의미적 오류를 가리킨다.",
      "구조는 유전 물질, 변경은 변이, 판정은 자연선택이다.",
      "변경에 대응한다.",
      "실험자의 판정에 대응한다.",
      "성인 지성 형성 요소의 하나다."
    ],
    "sourcePage": 6
  },
  {
    "id": "easy-3-5-05",
    "week": 3,
    "keyword": "3-5",
    "question": "진화 유비에서 기계의 변경은 무엇에 대응하는가?",
    "choices": [
      "변이",
      "유전 물질",
      "자연선택",
      "기능의 오류",
      "의식 반론"
    ],
    "answer": 0,
    "explanation": "구조의 변경을 변이에 비유한다.",
    "choiceExplanations": [
      "구조의 변경을 변이에 비유한다.",
      "기계의 구조에 대응한다.",
      "실험자의 판정에 대응한다.",
      "변경을 반드시 고장이라고 보지 않는다.",
      "기계의 의식 판정에 관한 다른 논의다."
    ],
    "sourcePage": 6
  },
  {
    "id": "easy-3-5-06",
    "week": 3,
    "keyword": "3-5",
    "question": "진화 유비에서 실험자의 판정은?",
    "choices": [
      "유전 물질",
      "변이",
      "비물리적 실체",
      "결과의 오류",
      "자연선택"
    ],
    "answer": 4,
    "explanation": "구조 변경 후 판정이 선택에 대응한다.",
    "choiceExplanations": [
      "기계 구조에 대응한다.",
      "기계 변경에 대응한다.",
      "진화 유비의 대응 항목이 아니다.",
      "판정 자체의 유비는 자연선택이다.",
      "구조 변경 후 판정이 선택에 대응한다."
    ],
    "sourcePage": 6
  },
  {
    "id": "easy-3-5-07",
    "week": 3,
    "keyword": "3-5",
    "question": "학습 중 변하는 규칙에 대한 설명은?",
    "choices": [
      "규칙이 바뀌면 기계일 수 없다.",
      "규칙이 변하면 반드시 고장이다.",
      "기계의 모든 규칙은 언제나 교사에게 투명하다.",
      "일시적 타당성만 주장하는 덜 철저한 규칙이 변한다.",
      "모든 기본 작동 규칙이 무조건 사라진다."
    ],
    "answer": 3,
    "explanation": "변하는 학습 규칙과 지속되는 기본 규칙을 구별한다.",
    "choiceExplanations": [
      "학습 기계 구상에서 일부 규칙의 변화가 가능하다.",
      "학습에 따른 규칙 수정과 고장은 구별된다.",
      "교사는 내부 진행을 대개 모를 수 있다.",
      "변하는 학습 규칙과 지속되는 기본 규칙을 구별한다.",
      "모든 기본 규칙의 폐기를 주장하지 않는다."
    ],
    "sourcePage": 6
  },
  {
    "id": "easy-3-5-08",
    "week": 3,
    "keyword": "3-5",
    "question": "학습 기계의 교사와 내부 진행의 관계로 맞는 것은?",
    "choices": [
      "교사가 모르면 학습이 불가능하다.",
      "교사는 무조건 기계의 모든 답을 예측한다.",
      "교사는 내부의 진행 과정을 대개 모를 수 있다.",
      "교사는 모든 내부 과정을 반드시 안다.",
      "교사는 프로그램을 넣을 수 없다."
    ],
    "answer": 2,
    "explanation": "학습 기계의 중요한 특징으로 소개된다.",
    "choiceExplanations": [
      "불투명성은 학습 불가능의 결론이 아니다.",
      "학습 결과는 확실하지 않을 수 있다.",
      "학습 기계의 중요한 특징으로 소개된다.",
      "자료는 그 반대를 강조한다.",
      "프로그램을 넣어도 내부 진행을 다 알지 못할 수 있다."
    ],
    "sourcePage": 6
  },
  {
    "id": "easy-3-5-09",
    "week": 3,
    "keyword": "3-5",
    "question": "학습 기계에 무작위적 요소를 넣는 목적은?",
    "choices": [
      "모든 경험을 배제하기",
      "만족스러운 행동·풀이를 찾는 탐색",
      "모든 기본 규칙을 없애기",
      "계산 결과를 항상 틀리게 만들기",
      "교사에게 모든 내부 상태를 공개하기"
    ],
    "answer": 1,
    "explanation": "가능한 답이 많아 체계적 탐색보다 유리할 수 있다고 한다.",
    "choiceExplanations": [
      "교육·경험을 통해 기계를 학습시키려 한다.",
      "가능한 답이 많아 체계적 탐색보다 유리할 수 있다고 한다.",
      "규칙 전체를 폐기하는 제안이 아니다.",
      "만족할 만한 답을 찾는 것이 목적이다.",
      "자료는 교사의 내부 무지를 강조한다."
    ],
    "sourcePage": 6
  },
  {
    "id": "easy-3-5-10",
    "week": 3,
    "keyword": "3-5",
    "question": "학습된 과정의 결과에 대한 튜링의 설명은?",
    "choices": [
      "항상 100% 확실하지는 않다.",
      "반드시 매번 같은 정답이다.",
      "오류는 반드시 전기 고장이다.",
      "결과는 교사에게 처음부터 모두 알려져 있다.",
      "무작위성을 넣으면 만족스러운 답은 절대 없다."
    ],
    "answer": 0,
    "explanation": "학습 과정의 오류 가능성과 불확실성을 인정한다.",
    "choiceExplanations": [
      "학습 과정의 오류 가능성과 불확실성을 인정한다.",
      "학습된 과정이 확실한 결과만 내지는 않는다.",
      "결과의 오류는 기능 고장과 다르다.",
      "내부 진행과 결과가 불투명할 수 있다.",
      "무작위 탐색이 답을 찾는 데 유용할 수 있다."
    ],
    "sourcePage": 6
  },
  {
    "id": "easy-4-1-01",
    "week": 4,
    "keyword": "4-1",
    "question": "중국어방의 사람은 규칙서를 어떤 언어로 읽는가?",
    "choices": [
      "중국어",
      "언어를 전혀 모른다.",
      "기호 의미를 먼저 중국어로 배운다.",
      "모국어가 중국어이다.",
      "영어"
    ],
    "answer": 4,
    "explanation": "중국어는 모르지만 영어로 된 규칙은 이해한다.",
    "choiceExplanations": [
      "중국어 기호의 의미는 모른다고 설정된다.",
      "영어는 이해하는 사람이다.",
      "중국어 의미를 배우지 않고 규칙만 따른다.",
      "모국어로 영어를 이해하는 설정이다.",
      "중국어는 모르지만 영어로 된 규칙은 이해한다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-4-1-02",
    "week": 4,
    "keyword": "4-1",
    "question": "중국어방 안에서 실제로 수행하는 일은?",
    "choices": [
      "규칙 없이 중국어를 직관적으로 답함",
      "입력 문장을 모두 영어로 번역함",
      "외부 사람의 의식을 직접 읽음",
      "기호의 형식에 따라 기호를 연결함",
      "중국어 의미를 직접 파악함"
    ],
    "answer": 3,
    "explanation": "의미 이해 없이 영어 규칙을 따라 중국어 기호를 조작한다.",
    "choiceExplanations": [
      "규칙을 따라 답을 산출한다.",
      "중국어 의미를 모르며 형식 기호만 조작한다.",
      "그런 설정은 없다.",
      "의미 이해 없이 영어 규칙을 따라 중국어 기호를 조작한다.",
      "중국어를 이해하지 못하는 설정이다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-4-1-03",
    "week": 4,
    "keyword": "4-1",
    "question": "중국어방의 바깥 사람이 보는 성공적 수행은?",
    "choices": [
      "영어 답변만 내보냄",
      "방 안 사람의 중국어 이해를 직접 관찰함",
      "모국어 화자의 답과 구별하기 어려운 응답",
      "중국어 문장을 전혀 내보내지 못함",
      "항상 무의미해서 바로 구별됨"
    ],
    "answer": 2,
    "explanation": "성공적인 입출력에도 내부 사람은 이해하지 못한다고 상정한다.",
    "choiceExplanations": [
      "중국어 기호로 응답한다.",
      "바깥에서는 입출력만 관찰한다.",
      "성공적인 입출력에도 내부 사람은 이해하지 못한다고 상정한다.",
      "규칙에 따라 응답을 산출한다.",
      "모국어 화자와 구별 못할 수준을 상정한다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-4-1-04",
    "week": 4,
    "keyword": "4-1",
    "question": "중국어방에서 대비되는 두 가지는?",
    "choices": [
      "신체 실체와 영혼의 상호작용만",
      "성공적인 형식 처리와 의미 이해의 부재",
      "중국어 의미 이해와 출력 불가능",
      "전기 고장과 수리",
      "유전 정보와 환경 고정"
    ],
    "answer": 1,
    "explanation": "외적 성공이 이해를 보장하는지 묻는다.",
    "choiceExplanations": [
      "중국어방은 형식 프로그램과 이해를 다룬다.",
      "외적 성공이 이해를 보장하는지 묻는다.",
      "이해 없이도 응답하는 설정이다.",
      "장치 고장에 관한 사고실험이 아니다.",
      "7주차의 별도 논의이다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-4-1-05",
    "week": 4,
    "keyword": "4-1",
    "question": "중국어방 설정에 어긋나는 설명은?",
    "choices": [
      "사람이 중국어 이야기의 의미를 이미 안다.",
      "규칙서는 영어로 쓰여 있다.",
      "중국어 기호를 받아 다른 기호를 내보낸다.",
      "바깥 사람은 답을 모국어 화자와 구별하지 못할 수 있다.",
      "기호 조작에 숙달되어도 이해는 없다고 가정한다."
    ],
    "answer": 0,
    "explanation": "중국어를 모르는 것이 설정의 핵심이다.",
    "choiceExplanations": [
      "중국어를 모르는 것이 설정의 핵심이다.",
      "사람이 이해하는 영어 규칙을 사용한다.",
      "형식적 입출력 작업이다.",
      "성공적 문답을 상정한다.",
      "써얼이 의도한 대비이다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-4-1-06",
    "week": 4,
    "keyword": "4-1",
    "question": "섄크의 이야기 이해 프로그램이 중국어방 논의에 등장하는 이유는?",
    "choices": [
      "성공적인 답변이 반드시 이해를 보장한다고 써얼이 입증하려고",
      "컴퓨터의 연구 도구로서의 유용성 자체를 거부하려고",
      "프로그램은 어떤 질문에도 응답하지 못해서",
      "프로그램에 의한 기호 처리가 없어서",
      "이야기에 명시되지 않은 질문에도 답하는 수행과 이해를 구별하려고"
    ],
    "answer": 4,
    "explanation": "프로그램의 답변 능력이 곧 이해를 보장하는지 써얼이 비판한다.",
    "choiceExplanations": [
      "써얼은 그 충분조건 주장을 비판한다.",
      "써얼은 약한 AI의 도구적 가치를 부정하지 않는다.",
      "자료는 성공적 응답의 예를 제시한다.",
      "프로그램은 형식 기호를 처리한다.",
      "프로그램의 답변 능력이 곧 이해를 보장하는지 써얼이 비판한다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-4-2-01",
    "week": 4,
    "keyword": "4-2",
    "question": "마음 연구에 컴퓨터를 강력한 도구로 쓰는 입장은?",
    "choices": [
      "속성 이원론",
      "예정조화론",
      "인과적 정보 이론",
      "약한 인공지능",
      "강한 인공지능"
    ],
    "answer": 3,
    "explanation": "써얼은 도구적 유용성을 주장하는 약한 AI에 반대하지 않는다.",
    "choiceExplanations": [
      "비물리적 감각질 속성에 관한 입장이다.",
      "단자의 사전 조화에 관한 입장이다.",
      "신호가 특정 내용을 전달하는 조건에 관한 이론이다.",
      "써얼은 도구적 유용성을 주장하는 약한 AI에 반대하지 않는다.",
      "프로그램된 컴퓨터 자체가 이해와 인지 상태를 갖는다는 더 강한 주장이다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-4-2-02",
    "week": 4,
    "keyword": "4-2",
    "question": "강한 인공지능의 주장으로 알맞은 것은?",
    "choices": [
      "중국어 기호에는 모양이 없다.",
      "언어 이해는 시험 대상이 될 수 없다.",
      "잘 프로그램된 컴퓨터 자체가 인지 상태를 가진다.",
      "컴퓨터는 심리학 설명을 시험하는 도구일 뿐이다.",
      "모든 물리적 기계는 생각할 수 없다."
    ],
    "answer": 2,
    "explanation": "컴퓨터를 도구로만 쓰는 주장보다 강하다.",
    "choiceExplanations": [
      "형식 기호 처리의 설정을 부정한다.",
      "이해를 시뮬레이트하고 설명하려는 주장을 다룬다.",
      "컴퓨터를 도구로만 쓰는 주장보다 강하다.",
      "이는 약한 AI의 도구적 주장에 해당한다.",
      "강한 AI를 옹호하는 설명과 반대다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-4-2-03",
    "week": 4,
    "keyword": "4-2",
    "question": "써얼이 형식 프로그램 구현에 대해 부정한 것은?",
    "choices": [
      "영어 규칙서의 이해 가능성",
      "이해의 충분조건이라는 주장",
      "형식 규칙을 따를 수 있다는 점",
      "중국어 입력과 출력의 존재",
      "컴퓨터가 연구 도구일 수 있다는 점"
    ],
    "answer": 1,
    "explanation": "이해하지 않아도 형식 규칙을 따를 수 있다고 주장한다.",
    "choiceExplanations": [
      "사람은 영어를 이해한다고 설정한다.",
      "이해하지 않아도 형식 규칙을 따를 수 있다고 주장한다.",
      "기호 조작의 가능성은 인정한다.",
      "성공적 입출력을 상정한다.",
      "약한 AI의 도구적 가치는 부정하지 않는다."
    ],
    "sourcePage": 2
  },
  {
    "id": "easy-4-2-04",
    "week": 4,
    "keyword": "4-2",
    "question": "‘문법만 있고 어의가 없다’에서 문법과 어의는 각각 무엇에 가까운가?",
    "choices": [
      "형식적 규칙과 의미",
      "의미와 형식적 규칙",
      "정신 실체와 신체 실체",
      "정보량과 신호 길이",
      "입력과 출력"
    ],
    "answer": 0,
    "explanation": "형식 기호 처리와 의미·지향성을 구별한다.",
    "choiceExplanations": [
      "형식 기호 처리와 의미·지향성을 구별한다.",
      "두 항목이 뒤바뀌었다.",
      "이 표현은 실체의 종류가 아니라 형식과 의미를 구별한다.",
      "정보 이론의 양적 구별이 아니다.",
      "입출력의 순서가 아니라 형식과 의미의 차이다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-4-2-05",
    "week": 4,
    "keyword": "4-2",
    "question": "써얼의 결론에 따르면 사고할 수 있는 특별한 기계의 기준은?",
    "choices": [
      "아무 형식 프로그램이나 실행함",
      "외모가 사람과 같기만 함",
      "계산 속도가 빠르기만 함",
      "비물리적 실체여야 함",
      "두뇌와 같은 능력을 가짐"
    ],
    "answer": 4,
    "explanation": "두뇌 또는 그와 같은 능력을 가진 특별한 종류의 기계만 생각할 수 있다고 한다.",
    "choiceExplanations": [
      "프로그램 실행만으로 충분하다는 주장을 비판한다.",
      "외모만으로 인과적 능력이 확정되지 않는다.",
      "속도가 이해의 충분조건이라고 하지 않는다.",
      "실제 두뇌의 물리·화학적 능력을 강조한다.",
      "두뇌 또는 그와 같은 능력을 가진 특별한 종류의 기계만 생각할 수 있다고 한다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-4-2-06",
    "week": 4,
    "keyword": "4-2",
    "question": "써얼의 주장을 잘못 요약한 것은?",
    "choices": [
      "실제 두뇌의 성질이 정신 현상과 관련된다.",
      "형식과 의미는 구별된다.",
      "프로그램 시뮬레이션이 곧 실재는 아니다.",
      "인공적으로 만든 어떤 기계도 생각할 수 없다.",
      "형식 프로그램만으로는 이해가 충분히 설명되지 않는다."
    ],
    "answer": 3,
    "explanation": "두뇌와 같은 인과적 능력의 특별한 기계 가능성은 배제하지 않는다.",
    "choiceExplanations": [
      "두뇌의 물리·화학적 능력을 강조한다.",
      "문법과 어의의 차이를 강조한다.",
      "모방과 실제 능력을 구별한다.",
      "두뇌와 같은 인과적 능력의 특별한 기계 가능성은 배제하지 않는다.",
      "핵심 주장이다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-4-2-07",
    "week": 4,
    "keyword": "4-2",
    "question": "중국어방 사람의 영어 이해와 중국어 처리를 비교한 써얼의 설명은?",
    "choices": [
      "중국어를 처리하면 영어 이해도 사라진다.",
      "형식 기호 처리가 있으면 모든 언어를 이해한다.",
      "영어는 이해하지만 중국어는 형식적으로 처리할 뿐이다.",
      "두 언어 모두 전혀 이해하지 못한다.",
      "중국어만 의미를 이해한다."
    ],
    "answer": 2,
    "explanation": "같은 사람이 언어에 따라 이해와 단순 처리의 차이를 보인다.",
    "choiceExplanations": [
      "그런 설정은 없다.",
      "써얼이 비판하는 충분조건 주장이다.",
      "같은 사람이 언어에 따라 이해와 단순 처리의 차이를 보인다.",
      "영어는 모국어 수준으로 이해한다.",
      "언어의 역할이 반대다."
    ],
    "sourcePage": 2
  },
  {
    "id": "easy-4-3-01",
    "week": 4,
    "keyword": "4-3",
    "question": "“사람은 몰라도 사람을 포함한 전체는 이해한다.”라는 반론은?",
    "choices": [
      "다른 사람의 마음 비판",
      "체계 이론 비판",
      "로봇 비판",
      "두뇌 시뮬레이션 비판",
      "결합 비판"
    ],
    "answer": 1,
    "explanation": "이해의 주체를 방 안 개인이 아니라 전체 체계로 본다.",
    "choiceExplanations": [
      "타인의 이해도 행동으로 인정하므로 기계도 인정하라는 반론이다.",
      "이해의 주체를 방 안 개인이 아니라 전체 체계로 본다.",
      "감각과 행동을 하는 로봇에 프로그램을 넣으면 이해한다고 주장한다.",
      "중국어 화자의 뉴런 작동 순서를 모방하면 이해한다고 주장한다.",
      "로봇·체계·두뇌 시뮬레이션을 모두 합친 경우를 제안한다."
    ],
    "sourcePage": 2
  },
  {
    "id": "easy-4-3-02",
    "week": 4,
    "keyword": "4-3",
    "question": "“세계에서 감지하고 행동하도록 몸을 더하자.”라는 반론은?",
    "choices": [
      "로봇 비판",
      "체계 이론 비판",
      "두뇌 시뮬레이션 비판",
      "다른 사람의 마음 비판",
      "미래 기술 비판"
    ],
    "answer": 0,
    "explanation": "감각과 행동을 하는 로봇에 프로그램을 넣으면 이해한다고 주장한다.",
    "choiceExplanations": [
      "감각과 행동을 하는 로봇에 프로그램을 넣으면 이해한다고 주장한다.",
      "이해의 주체를 방 안 개인이 아니라 전체 체계로 본다.",
      "중국어 화자의 뉴런 작동 순서를 모방하면 이해한다고 주장한다.",
      "타인의 이해도 행동으로 인정하므로 기계도 인정하라는 반론이다.",
      "미래에 적절한 인과 과정을 가진 장치를 만들 수 있다고 주장한다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-4-3-03",
    "week": 4,
    "keyword": "4-3",
    "question": "“중국어 화자의 뉴런 작동 순서를 흉내 내자.”라는 반론은?",
    "choices": [
      "로봇 비판",
      "체계 이론 비판",
      "결합 비판",
      "미래 기술 비판",
      "두뇌 시뮬레이션 비판"
    ],
    "answer": 4,
    "explanation": "중국어 화자의 뉴런 작동 순서를 모방하면 이해한다고 주장한다.",
    "choiceExplanations": [
      "감각과 행동을 하는 로봇에 프로그램을 넣으면 이해한다고 주장한다.",
      "이해의 주체를 방 안 개인이 아니라 전체 체계로 본다.",
      "로봇·체계·두뇌 시뮬레이션을 모두 합친 경우를 제안한다.",
      "미래에 적절한 인과 과정을 가진 장치를 만들 수 있다고 주장한다.",
      "중국어 화자의 뉴런 작동 순서를 모방하면 이해한다고 주장한다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-4-3-04",
    "week": 4,
    "keyword": "4-3",
    "question": "“로봇 몸·전체 체계·두뇌 모방을 모두 갖추면 어떤가?”는?",
    "choices": [
      "체계 이론 비판",
      "다른 사람의 마음 비판",
      "미래 기술 비판",
      "결합 비판",
      "로봇 비판"
    ],
    "answer": 3,
    "explanation": "로봇·체계·두뇌 시뮬레이션을 모두 합친 경우를 제안한다.",
    "choiceExplanations": [
      "이해의 주체를 방 안 개인이 아니라 전체 체계로 본다.",
      "타인의 이해도 행동으로 인정하므로 기계도 인정하라는 반론이다.",
      "미래에 적절한 인과 과정을 가진 장치를 만들 수 있다고 주장한다.",
      "로봇·체계·두뇌 시뮬레이션을 모두 합친 경우를 제안한다.",
      "감각과 행동을 하는 로봇에 프로그램을 넣으면 이해한다고 주장한다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-4-3-05",
    "week": 4,
    "keyword": "4-3",
    "question": "“타인의 이해도 행동으로 알 뿐이다.”라고 지적한 반론은?",
    "choices": [
      "두뇌 시뮬레이션 비판",
      "결합 비판",
      "다른 사람의 마음 비판",
      "체계 이론 비판",
      "로봇 비판"
    ],
    "answer": 2,
    "explanation": "타인의 이해도 행동으로 인정하므로 기계도 인정하라는 반론이다.",
    "choiceExplanations": [
      "중국어 화자의 뉴런 작동 순서를 모방하면 이해한다고 주장한다.",
      "로봇·체계·두뇌 시뮬레이션을 모두 합친 경우를 제안한다.",
      "타인의 이해도 행동으로 인정하므로 기계도 인정하라는 반론이다.",
      "이해의 주체를 방 안 개인이 아니라 전체 체계로 본다.",
      "감각과 행동을 하는 로봇에 프로그램을 넣으면 이해한다고 주장한다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-4-3-06",
    "week": 4,
    "keyword": "4-3",
    "question": "“현재와 달리 미래에는 이해의 인과 장치를 만들 수 있다.”는?",
    "choices": [
      "다른 사람의 마음 비판",
      "미래 기술 비판",
      "체계 이론 비판",
      "로봇 비판",
      "결합 비판"
    ],
    "answer": 1,
    "explanation": "미래에 적절한 인과 과정을 가진 장치를 만들 수 있다고 주장한다.",
    "choiceExplanations": [
      "타인의 이해도 행동으로 인정하므로 기계도 인정하라는 반론이다.",
      "미래에 적절한 인과 과정을 가진 장치를 만들 수 있다고 주장한다.",
      "이해의 주체를 방 안 개인이 아니라 전체 체계로 본다.",
      "감각과 행동을 하는 로봇에 프로그램을 넣으면 이해한다고 주장한다.",
      "로봇·체계·두뇌 시뮬레이션을 모두 합친 경우를 제안한다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-4-3-07",
    "week": 4,
    "keyword": "4-3",
    "question": "체계 비판에 응답하며 써얼이 사람에게 암기시키자고 한 것은?",
    "choices": [
      "규칙과 중국어 기호 데이터 전체",
      "중국어의 의미를 가르치는 번역만",
      "다른 사람의 의식 경험",
      "모든 뉴런의 물리적 재질",
      "텔레파시 방지 조건"
    ],
    "answer": 0,
    "explanation": "체계의 모든 요소를 개인에게 내면화시키는 제안이다.",
    "choiceExplanations": [
      "체계의 모든 요소를 개인에게 내면화시키는 제안이다.",
      "의미를 새로 학습시키는 것이 아니라 형식 체계를 내면화한다.",
      "타인의 경험을 직접 옮긴다는 제안이 아니다.",
      "체계 비판 대응은 규칙·데이터의 내면화다.",
      "튜링의 다른 반론 대응이다."
    ],
    "sourcePage": 2
  },
  {
    "id": "easy-4-3-08",
    "week": 4,
    "keyword": "4-3",
    "question": "체계를 전부 내면화해도 이해하지 못한다고 써얼이 말하는 까닭은?",
    "choices": [
      "암기하면 원래 규칙이 모두 사라지기 때문",
      "방을 나가면 중국어 입력이 금지되기 때문",
      "개인이 반드시 중국어를 모국어로 배우기 때문",
      "프로그램이 물리적으로 존재할 수 없기 때문",
      "개인에게 체계의 모든 요소가 있어도 중국어 의미 이해가 없기 때문"
    ],
    "answer": 4,
    "explanation": "개인과 전체 체계의 차이로 이해를 설명하려는 반론에 대응한다.",
    "choiceExplanations": [
      "규칙과 기호를 그대로 갖추도록 가정한다.",
      "야외에서 같은 작업을 해도 된다고 가정한다.",
      "중국어를 모르면서 처리하는 설정을 유지한다.",
      "실행 가능성 자체를 부정하지 않는다.",
      "개인과 전체 체계의 차이로 이해를 설명하려는 반론에 대응한다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-4-3-09",
    "week": 4,
    "keyword": "4-3",
    "question": "로봇 비판에 대한 써얼의 판단은?",
    "choices": [
      "몸이 있으면 프로그램의 형식은 사라진다.",
      "모터가 고장나야 이해가 생긴다.",
      "로봇은 어떤 입력도 받지 못한다.",
      "감각 장치·모터를 더해도 형식 처리만으로 지향성이 보장되지 않는다.",
      "감각 장치가 있으면 즉시 중국어를 이해한다."
    ],
    "answer": 3,
    "explanation": "외부 세계와 단순 인과 연결을 더하는 것으로 충분하지 않다고 주장한다.",
    "choiceExplanations": [
      "형식 처리 구조는 그대로 유지될 수 있다.",
      "고장이 이해를 만든다는 설명은 없다.",
      "로봇 반론은 오히려 감각 입력을 더한다.",
      "외부 세계와 단순 인과 연결을 더하는 것으로 충분하지 않다고 주장한다.",
      "이는 써얼이 수용한 결론이 아니다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-4-3-10",
    "week": 4,
    "keyword": "4-3",
    "question": "물 파이프와 밸브의 예가 대신 모방하는 것은?",
    "choices": [
      "메리의 색 경험",
      "단자들의 사전 조율",
      "뉴런 작용의 형식적 순서",
      "언어의 실제 의미를 직접 느끼는 경험",
      "기계의 텔레파시"
    ],
    "answer": 2,
    "explanation": "두뇌 시뮬레이션에 대한 써얼의 반박 사례다.",
    "choiceExplanations": [
      "잭슨의 별도 사고실험이다.",
      "예정조화론의 사례가 아니다.",
      "두뇌 시뮬레이션에 대한 써얼의 반박 사례다.",
      "형식 모방으로 이해가 생긴다는 주장에 반대하는 사례다.",
      "튜링의 초감각 지각 반론과 다르다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-4-3-11",
    "week": 4,
    "keyword": "4-3",
    "question": "결합 비판에서 인간 같은 로봇에 지향성을 부여하는 근거를 써얼은 어떻게 해석하는가?",
    "choices": [
      "규칙서가 중국어를 읽는다는 사실",
      "마음 상태를 일으키는 실제 장치가 있으리라는 가정",
      "프로그램의 형식 자체가 곧 마음이라는 증명",
      "사람 같은 외형이면 무조건 마음이라는 정의",
      "비물리적 영혼의 직접 관찰"
    ],
    "answer": 1,
    "explanation": "형식 프로그램 자체 때문이 아니라 실제 인과 장치에 대한 가정이라고 한다.",
    "choiceExplanations": [
      "규칙서 자체의 이해를 인정하지 않는다.",
      "형식 프로그램 자체 때문이 아니라 실제 인과 장치에 대한 가정이라고 한다.",
      "써얼은 이 점을 부정한다.",
      "실제 능력에 대한 가정과 외형 자체는 다르다.",
      "그런 관찰을 제시하지 않는다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-4-3-12",
    "week": 4,
    "keyword": "4-3",
    "question": "다른 사람의 마음 비판에 답하며 써얼이 논의 초점이라고 한 것은?",
    "choices": [
      "인정하는 인지 상태가 무엇인가",
      "중국어 답변의 길이를 어떻게 재는가",
      "기계가 신학적 영혼을 갖는가",
      "문장을 얼마나 빨리 출력하는가",
      "모든 행동을 어떻게 완벽히 예측하는가"
    ],
    "answer": 0,
    "explanation": "인지 상태를 어떻게 아는가와 그 상태의 본성을 구별한다.",
    "choiceExplanations": [
      "인지 상태를 어떻게 아는가와 그 상태의 본성을 구별한다.",
      "양적 길이의 문제가 아니다.",
      "이 대응의 초점이 아니다.",
      "속도보다 이해 상태 자체가 쟁점이다.",
      "튜링 비-정형성 반론과 다른 쟁점이다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-4-3-13",
    "week": 4,
    "keyword": "4-3",
    "question": "미래의 인과 장치에 부분적으로 동의하는 써얼이 요구하는 구별은?",
    "choices": [
      "현재와 미래는 어떤 차이도 없음",
      "외형과 피부색만",
      "영혼과 기호의 길이만",
      "모든 컴퓨터는 이미 이해함",
      "실제 인과 능력과 순수한 형식 계산"
    ],
    "answer": 4,
    "explanation": "새 장치를 제안하면 형식 계산만이라는 원래 AI 정의를 바꾸는 셈이다.",
    "choiceExplanations": [
      "미래 장치의 가능성을 전면 부정하지 않는다.",
      "그 구별이 핵심이 아니다.",
      "실제 능력과 프로그램 형식이 쟁점이다.",
      "형식 프로그램만으로 충분하다는 주장을 거부한다.",
      "새 장치를 제안하면 형식 계산만이라는 원래 AI 정의를 바꾸는 셈이다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-4-3-14",
    "week": 4,
    "keyword": "4-3",
    "question": "‘이해에는 여러 종류와 수준이 있다’는 지적에 대한 써얼의 답은?",
    "choices": [
      "중국어방의 이해는 반드시 절반이다.",
      "분명한 이해 사례는 전혀 없다.",
      "수준이 다양하므로 모든 프로그램은 이해한다.",
      "그 점을 인정해도 분명한 이해·비이해 사례로 논의할 수 있다.",
      "이해에는 단 하나의 수준만 있다."
    ],
    "answer": 3,
    "explanation": "수준의 다양성이 중국어방의 논점을 없애지는 않는다고 한다.",
    "choiceExplanations": [
      "자료는 컴퓨터의 이해를 부분적이 아니라 제로라고 표현한다.",
      "분명한 사례가 있다고 전제한다.",
      "이 결론을 수용하지 않는다.",
      "수준의 다양성이 중국어방의 논점을 없애지는 않는다고 한다.",
      "비판자의 지적 자체는 인정한다."
    ],
    "sourcePage": 2
  },
  {
    "id": "easy-5-1-01",
    "week": 5,
    "keyword": "5-1",
    "question": "토마토의 색이나 장미 향기가 ‘어떻게 느껴지는지’를 가리키는 용어는?",
    "choices": [
      "내적 연결",
      "행동 성향",
      "감각질",
      "입력",
      "출력"
    ],
    "answer": 2,
    "explanation": "경험의 독특한 질적·현상적 성격이다.",
    "choiceExplanations": [
      "심적 상태 사이의 인과적 관계이다.",
      "특정 상황에서 반응하려는 경향이다.",
      "경험의 독특한 질적·현상적 성격이다.",
      "기능적 역할에서 상태를 일으키는 상황이다.",
      "상태가 낳는 행동이다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-5-1-02",
    "week": 5,
    "keyword": "5-1",
    "question": "감각질과 외부 자극의 관계를 옳게 구별한 것은?",
    "choices": [
      "감각질은 입력·출력 목록과 같은 뜻이다.",
      "감각질은 자극 자체가 아니라 경험의 질이다.",
      "감각질은 토마토의 질량 자체이다.",
      "감각질은 장미의 외형만이다.",
      "감각질은 비명을 지른 횟수이다."
    ],
    "answer": 1,
    "explanation": "토마토와 토마토를 볼 때의 질적 경험은 구별된다.",
    "choiceExplanations": [
      "기능적 역할과 질적 경험이 같은지는 논쟁의 쟁점이다.",
      "토마토와 토마토를 볼 때의 질적 경험은 구별된다.",
      "자극의 물리량과 경험의 질은 다르다.",
      "향기가 어떻게 느껴지는지 역시 감각질의 예다.",
      "외적 행동 횟수와 경험의 질은 구별된다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-5-1-03",
    "week": 5,
    "keyword": "5-1",
    "question": "전도된 감각질이 상정하는 차이는?",
    "choices": [
      "기능은 같아도 경험의 질은 다를 수 있음",
      "기능도 경험도 반드시 없음",
      "물리적 입력은 없지만 말만 함",
      "모든 믿음은 거짓임",
      "정신과 신체가 서로 힘을 줌"
    ],
    "answer": 0,
    "explanation": "행동과 기능이 같지만 색이 다르게 보이는 경우를 상정한다.",
    "choiceExplanations": [
      "행동과 기능이 같지만 색이 다르게 보이는 경우를 상정한다.",
      "전도는 경험의 부재가 아니라 질의 차이다.",
      "그런 입력 부재를 핵심으로 하지 않는다.",
      "믿음의 진리값에 관한 사고실험이 아니다.",
      "상호작용론과 다른 주제다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-5-1-04",
    "week": 5,
    "keyword": "5-1",
    "question": "결여된 감각질에서 결여되는 것은?",
    "choices": [
      "모든 외적 행동",
      "모든 기능적 조직",
      "컴퓨터 프로그램의 모든 기호",
      "신체의 모든 물리 상태",
      "질적 경험"
    ],
    "answer": 4,
    "explanation": "기능·행동이 인간과 같아도 질적 경험이 없을 가능성을 상정한다.",
    "choiceExplanations": [
      "외적 행동은 같을 수 있다고 설정한다.",
      "기능 조직을 유지한 채 질의 부재를 묻는다.",
      "기호의 부재가 핵심이 아니다.",
      "물리적 구현 자체를 없애는 설정이 아니다.",
      "기능·행동이 인간과 같아도 질적 경험이 없을 가능성을 상정한다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-5-1-05",
    "week": 5,
    "keyword": "5-1",
    "question": "중국 국가 사고실험에서 뇌의 뉴런 역할을 나누어 맡는 것은?",
    "choices": [
      "신의 사전 조율",
      "나이테의 성장",
      "오토의 노트 한 권",
      "중국 국민들의 통신 체계",
      "메리 한 사람의 색 시각"
    ],
    "answer": 3,
    "explanation": "각자가 통신하며 인간 두뇌의 기능적 조직을 구현한다고 상정한다.",
    "choiceExplanations": [
      "예정조화론의 설명이다.",
      "의미론적 정보의 예다.",
      "확장된 마음의 사례다.",
      "각자가 통신하며 인간 두뇌의 기능적 조직을 구현한다고 상정한다.",
      "메리는 지식 논증의 사례다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-5-1-06",
    "week": 5,
    "keyword": "5-1",
    "question": "중국 국가의 기능적 조직을 갖추어도 남는 질문은?",
    "choices": [
      "정보를 반드시 3비트로 줄이는가?",
      "노트가 기억과 같은 기능을 하는가?",
      "체계 전체가 실제로 고통을 느끼는가?",
      "국민이 모두 중국어 문법을 모르는가?",
      "신이 매번 국민을 움직이는가?"
    ],
    "answer": 2,
    "explanation": "기능적 구현과 질적 경험의 관계를 묻는다.",
    "choiceExplanations": [
      "이진 코드 계산의 사례가 아니다.",
      "오토 사례의 질문이다.",
      "기능적 구현과 질적 경험의 관계를 묻는다.",
      "중국어방과 구별한다.",
      "기회원인론의 설명이 아니다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-5-1-07",
    "week": 5,
    "keyword": "5-1",
    "question": "기능주의자의 감각질 반론 대응으로 제시된 것은?",
    "choices": [
      "모든 질적 경험은 행동을 전혀 못 일으킴",
      "완전히 기능적으로 같으면 질적으로도 같다고 봄",
      "기능이 같으면 감각질이 반드시 다름",
      "모든 감각질은 정신의 필수 비물리 실체임",
      "중국 국가는 반드시 기능이 같지 않다고만 정의함"
    ],
    "answer": 1,
    "explanation": "전도·결여의 가능성 자체를 부정하는 대응이다.",
    "choiceExplanations": [
      "기능주의자의 대응을 이렇게 단정하지 않는다.",
      "전도·결여의 가능성 자체를 부정하는 대응이다.",
      "자료의 대응과 반대다.",
      "기능주의자의 대응이 아니다.",
      "자료는 더 정교한 기능 묘사와 직관의 편견을 논한다."
    ],
    "sourcePage": 2
  },
  {
    "id": "easy-5-1-08",
    "week": 5,
    "keyword": "5-1",
    "question": "감각질을 ‘호랑이 줄무늬’에 비유한 기능주의 대응의 뜻은?",
    "choices": [
      "심적 상태를 식별하게 돕는 부차적 역할",
      "심적 상태의 유일한 본질",
      "두뇌의 특정 위치와 항상 동일",
      "신의 매개 작용",
      "기호의 진리 조건"
    ],
    "answer": 0,
    "explanation": "심적 상태의 본질은 기능적 역할이라고 본다.",
    "choiceExplanations": [
      "심적 상태의 본질은 기능적 역할이라고 본다.",
      "자료는 본질적이지 않다는 대응으로 제시한다.",
      "이 비유는 위치의 동일성이 아니다.",
      "기회원인론과 무관하다.",
      "중국어방의 형식·의미 구별과 다르다."
    ],
    "sourcePage": 2
  },
  {
    "id": "easy-5-1-09",
    "week": 5,
    "keyword": "5-1",
    "question": "슈메이커가 지식의 인과설로부터 사용하는 전제는?",
    "choices": [
      "감각질을 알면 인과 연결이 불필요하다.",
      "감각질은 색깔 단어의 철자이다.",
      "모든 행동 성향은 곧 지식이다.",
      "모든 뇌 상태는 고통이다.",
      "감각질이 인과 영향을 못 미치면 그에 대한 지식도 없다."
    ],
    "answer": 4,
    "explanation": "이를 감각질 지식의 존재와 결합해 결여 가능성을 반박한다.",
    "choiceExplanations": [
      "지식의 인과설 전제와 반대다.",
      "경험의 질을 철자와 동일시하지 않는다.",
      "해당 논증의 전제가 아니다.",
      "해당 논증과 무관한 과도한 주장이다.",
      "이를 감각질 지식의 존재와 결합해 결여 가능성을 반박한다."
    ],
    "sourcePage": 2
  },
  {
    "id": "easy-5-1-10",
    "week": 5,
    "keyword": "5-1",
    "question": "감각질 전도·결여의 가능성만으로 곧바로 논박되지는 않는 것으로 자료가 구별한 것은?",
    "choices": [
      "질을 기능적 관계로 규정하는 방식",
      "입력·출력 역할만으로 질을 결정하는 주장",
      "기능적으로 같으면 질도 같다는 주장",
      "물리주의 일반",
      "기능주의의 질적 경험 설명"
    ],
    "answer": 3,
    "explanation": "자료는 이 사고실험의 직접 표적을 기능주의로 한정한다.",
    "choiceExplanations": [
      "감각질 반론이 겨냥하는 방식이다.",
      "이 주장에 의문을 제기한다.",
      "그 가능성에 반대하는 사고실험이다.",
      "자료는 이 사고실험의 직접 표적을 기능주의로 한정한다.",
      "이것이 직접 비판 대상이다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-5-1-11",
    "week": 5,
    "keyword": "5-1",
    "question": "혼선된 두뇌에서 서로 교차시키는 메커니즘은?",
    "choices": [
      "유전자와 환경",
      "나이테와 수은온도계",
      "고통과 가려움의 신경 메커니즘",
      "정신 실체와 신체 실체",
      "중국어와 영어 규칙서"
    ],
    "answer": 2,
    "explanation": "입출력 역할과 경험의 질을 분리해 생각하게 하는 사례다.",
    "choiceExplanations": [
      "7주차의 별도 논의다.",
      "정보 의미론의 예다.",
      "입출력 역할과 경험의 질을 분리해 생각하게 하는 사례다.",
      "실체의 교환을 상정하는 사례가 아니다.",
      "중국어방의 설정과 다르다."
    ],
    "sourcePage": 2
  },
  {
    "id": "easy-5-2-01",
    "week": 5,
    "keyword": "5-2",
    "question": "메리는 방을 나오기 전 어떤 방식으로 교육받는가?",
    "choices": [
      "색에 관한 지식을 전혀 배우지 않음",
      "흑백 텔레비전의 강의",
      "빨간색과 초록색을 직접 번갈아 관찰",
      "컬러 화면의 모든 색을 관찰",
      "기억 없이 규칙서만 암기"
    ],
    "answer": 1,
    "explanation": "색 경험을 하지 않고도 관련 물리 사실을 배우는 설정이다.",
    "choiceExplanations": [
      "관련 물리적 지식은 모두 가진다고 설정한다.",
      "색 경험을 하지 않고도 관련 물리 사실을 배우는 설정이다.",
      "방 밖에서 처음 빨강을 본다는 설정과 다르다.",
      "흑백 환경이라는 설정에 어긋난다.",
      "중국어방과 다르다."
    ],
    "sourcePage": 7
  },
  {
    "id": "easy-5-2-02",
    "week": 5,
    "keyword": "5-2",
    "question": "메리에게 모든 세계 지식 대신 최소한 가정해도 충분하다고 한 지식은?",
    "choices": [
      "색 경험에 관련된 모든 물리적 지식",
      "색의 이름 다섯 개만",
      "실제로 본 색의 지식만",
      "감각질에 대한 모든 비물리적 지식",
      "중국어의 모든 구문 규칙"
    ],
    "answer": 0,
    "explanation": "자료는 사고실험을 위해 관련 물리 사실 전체면 충분하다고 한다.",
    "choiceExplanations": [
      "자료는 사고실험을 위해 관련 물리 사실 전체면 충분하다고 한다.",
      "일부 단어 지식으로는 핵심 가정이 성립하지 않는다.",
      "처음 색을 보면서 무엇을 배우는지 묻는 설정이다.",
      "이것까지 이미 안다고 가정하는 논증이 아니다.",
      "중국어방의 내용이다."
    ],
    "sourcePage": 7
  },
  {
    "id": "easy-5-2-03",
    "week": 5,
    "keyword": "5-2",
    "question": "완벽한 추론 능력을 메리에게 가정하는 이유는?",
    "choices": [
      "이미 빨강을 경험했다고 하기 위해서",
      "물리 지식을 모른다고 하기 위해서",
      "방을 무작위로 나가게 하기 위해서",
      "타인의 행동을 완벽히 예측했다고 하기 위해서",
      "물리 사실에서 따라오는 논리적 귀결까지 안다고 하기 위해서"
    ],
    "answer": 4,
    "explanation": "새 배움이 단지 미처 추론하지 못한 물리적 귀결이라는 설명을 막는다.",
    "choiceExplanations": [
      "추론 능력과 직접 경험은 구별한다.",
      "관련 물리 지식을 모두 안다는 설정이다.",
      "출구 선택이 논증의 쟁점이 아니다.",
      "이 가정의 목적은 논리적 귀결의 지식이다.",
      "새 배움이 단지 미처 추론하지 못한 물리적 귀결이라는 설명을 막는다."
    ],
    "sourcePage": 7
  },
  {
    "id": "easy-5-2-04",
    "week": 5,
    "keyword": "5-2",
    "question": "메리가 처음 빨강을 본 뒤 잭슨이 새로 얻었다고 해석한 것은?",
    "choices": [
      "새 신경의 해부학적 이름",
      "색의 파장 측정값만",
      "중국어의 기호 처리 능력",
      "빨강이 어떻게 보이는지에 관한 감각질 사실",
      "아직 모르던 색의 물리 법칙"
    ],
    "answer": 3,
    "explanation": "새로운 물리 법칙이 아니라 질적 경험에 관한 사실이다.",
    "choiceExplanations": [
      "이런 물리 지식은 이미 안다고 가정한다.",
      "파장 등 물리적 지식을 이미 갖춘 설정이다.",
      "중국어방의 별도 논의다.",
      "새로운 물리 법칙이 아니라 질적 경험에 관한 사실이다.",
      "관련 물리 사실을 이미 모두 안다는 전제다."
    ],
    "sourcePage": 7
  },
  {
    "id": "easy-5-2-05",
    "week": 5,
    "keyword": "5-2",
    "question": "지식 논증이 반박하려는 물리주의의 표현은?",
    "choices": [
      "경험은 언제나 거짓이다.",
      "모든 마음은 외부 노트이다.",
      "모든 사실은 물리적 사실이다.",
      "어떤 물리적 사실도 없다.",
      "오직 정신 실체만 존재한다."
    ],
    "answer": 2,
    "explanation": "관련 물리 사실을 알고도 새 사실을 배우는지가 쟁점이다.",
    "choiceExplanations": [
      "물리주의를 이렇게 정의하지 않는다.",
      "확장된 마음 논의와도 다른 표현이다.",
      "관련 물리 사실을 알고도 새 사실을 배우는지가 쟁점이다.",
      "물리주의는 물리적 사실 자체를 부정하지 않는다.",
      "실체 이원론·관념론적 설명과 다르다."
    ],
    "sourcePage": 7
  },
  {
    "id": "easy-5-2-06",
    "week": 5,
    "keyword": "5-2",
    "question": "잭슨의 논증에서 새 감각질 사실이 있다는 결론은 무엇을 지지하는가?",
    "choices": [
      "뇌 상태와 경험은 같은 단어라는 주장",
      "물리적 사실이 전부는 아니라는 주장",
      "모든 물리 지식이 거짓이라는 주장",
      "색 경험은 존재하지 않는다는 주장",
      "언어 규칙이 이해의 충분조건이라는 주장"
    ],
    "answer": 1,
    "explanation": "관련 물리 사실을 모두 알아도 배우는 사실이 남는다는 것이다.",
    "choiceExplanations": [
      "과학적 동일성 주장을 입증하는 논증이 아니다.",
      "관련 물리 사실을 모두 알아도 배우는 사실이 남는다는 것이다.",
      "물리 지식의 참됨 자체를 전면 부정하지 않는다.",
      "질적 경험을 오히려 논증의 핵심으로 삼는다.",
      "중국어방 논의의 별도 주장이다."
    ],
    "sourcePage": 7
  },
  {
    "id": "easy-5-2-07",
    "week": 5,
    "keyword": "5-2",
    "question": "자료에서 잭슨이 감각질에 대해 지지한 이원론의 종류는?",
    "choices": [
      "속성 이원론",
      "실체 이원론",
      "예정조화론",
      "논리적 행동주의",
      "제한적 유형 동일론"
    ],
    "answer": 0,
    "explanation": "별도 실체보다 물리적 사실과 구별되는 감각질 속성에 관한 입장이다.",
    "choiceExplanations": [
      "별도 실체보다 물리적 사실과 구별되는 감각질 속성에 관한 입장이다.",
      "자료는 감각질에 관한 속성 이원론으로 명시한다.",
      "단자의 사전 조화에 관한 견해다.",
      "심적 상태를 행동 성향으로 설명한다.",
      "유형 동일성을 종별로 한정한다."
    ],
    "sourcePage": 7
  },
  {
    "id": "easy-5-2-08",
    "week": 5,
    "keyword": "5-2",
    "question": "능력 가설과 ‘낡은 사실, 새로운 방식’ 반론이 공통으로 겨냥하는 전제는?",
    "choices": [
      "메리는 흑백방에 있다.",
      "물리적 사실은 존재한다.",
      "빨강을 볼 수 있는 사람이 있다.",
      "지식에는 여러 종류가 있다.",
      "새로 배우면 반드시 새로운 사실을 안다."
    ],
    "answer": 4,
    "explanation": "자료의 P4를 부정해 새 배움의 성격을 다르게 설명한다.",
    "choiceExplanations": [
      "이 배경 설정이 공통 표적이 아니다.",
      "물리 사실의 존재 자체를 부정하지 않는다.",
      "색 시각의 가능성이 공통 표적이 아니다.",
      "지식의 여러 종류는 오히려 반론에 사용된다.",
      "자료의 P4를 부정해 새 배움의 성격을 다르게 설명한다."
    ],
    "sourcePage": 7
  },
  {
    "id": "easy-5-2-09",
    "week": 5,
    "keyword": "5-2",
    "question": "능력 가설이 메리의 새 배움을 분류하는 지식은?",
    "choices": [
      "모든 비물리 사실의 지식",
      "물리 법칙을 처음 배우는 지식",
      "신이 준 선천적 의미",
      "knowing how",
      "knowing that만"
    ],
    "answer": 3,
    "explanation": "사실을 아는 knowing that 대신 능력으로서의 지식으로 본다.",
    "choiceExplanations": [
      "잭슨의 결론을 그대로 수용하는 설명이 아니다.",
      "관련 물리 사실은 이미 안다는 전제다.",
      "자료의 능력 가설이 아니다.",
      "사실을 아는 knowing that 대신 능력으로서의 지식으로 본다.",
      "새 사실의 지식이라는 해석에 반대한다."
    ],
    "sourcePage": 8
  },
  {
    "id": "easy-5-2-10",
    "week": 5,
    "keyword": "5-2",
    "question": "루이스의 세 능력 목록에 포함되지 않는 것은?",
    "choices": [
      "다시 그 색을 알아보기",
      "빨강 경험을 시각적으로 상상하기",
      "물리 법칙을 새로 연역하기",
      "경험을 기억하기",
      "경험을 상상하기"
    ],
    "answer": 2,
    "explanation": "목록은 기억·상상·인지이다.",
    "choiceExplanations": [
      "recognize에 해당한다.",
      "상상 능력의 예다.",
      "목록은 기억·상상·인지이다.",
      "remember에 해당한다.",
      "imagine에 해당한다."
    ],
    "sourcePage": 9
  },
  {
    "id": "easy-5-2-11",
    "week": 5,
    "keyword": "5-2",
    "question": "‘낡은 사실, 새로운 방식’에서 새롭게 얻는 것은?",
    "choices": [
      "색과 무관한 중국어 규칙",
      "이미 아는 사실에 접근하는 현상적 개념",
      "기존과 별개의 비물리 사실만",
      "새 물리 법칙의 참됨",
      "모든 옛 사실의 거짓됨"
    ],
    "answer": 1,
    "explanation": "사실 자체가 아니라 접근 방식이 새롭다는 반론이다.",
    "choiceExplanations": [
      "자료의 반론과 무관하다.",
      "사실 자체가 아니라 접근 방식이 새롭다는 반론이다.",
      "이것은 반론이 아니라 잭슨 쪽 해석이다.",
      "관련 물리 사실을 이미 아는 설정을 유지한다.",
      "기존 사실을 폐기하지 않는다."
    ],
    "sourcePage": 9
  },
  {
    "id": "easy-5-2-12",
    "week": 5,
    "keyword": "5-2",
    "question": "잭슨의 부수현상론에 대해 자료가 제기한 어려움은?",
    "choices": [
      "인과 효력 없는 감각질이 발언·지식을 어떻게 설명하는가",
      "감각질이 너무 강하게 모든 사건을 일으킨다.",
      "메리가 물리적 사실을 하나도 모른다.",
      "노트와 기억의 접근성이 다르다.",
      "모든 언어는 거짓 명제만 만든다."
    ],
    "answer": 0,
    "explanation": "메리의 ‘빨강은 이렇게 보인다’는 발언과 감각질 지식의 연결을 묻는다.",
    "choiceExplanations": [
      "메리의 ‘빨강은 이렇게 보인다’는 발언과 감각질 지식의 연결을 묻는다.",
      "부수현상론은 감각질의 인과적 효력을 부정한다.",
      "사고실험의 전제와 반대다.",
      "확장된 마음의 별도 비판이다.",
      "중국어방 논의와도 다른 주장이다."
    ],
    "sourcePage": 7
  },
  {
    "id": "easy-6-1-01",
    "week": 6,
    "keyword": "6-1",
    "question": "신체 구조와 감각·운동 체계를 강조하는 4E 관점은?",
    "choices": [
      "확장된 인지",
      "구현된 인지",
      "행화적 인지",
      "철학적 행동주의",
      "체화된 인지"
    ],
    "answer": 4,
    "explanation": "신체 구조와 감각·운동 체계가 인지 형성에 기여한다.",
    "choiceExplanations": [
      "도구·기술·기억 저장 장치가 인지 체계의 일부가 될 수 있다.",
      "자료의 embedded cognition으로, 물리적·사회적 환경에 최적화된 인지 과정이다.",
      "능동적 행위와 상호작용을 통해 의미가 생성된다고 본다.",
      "심적 상태를 일정 상황에서의 행동 성향으로 설명한다.",
      "신체 구조와 감각·운동 체계가 인지 형성에 기여한다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-6-1-02",
    "week": 6,
    "keyword": "6-1",
    "question": "기억 저장 도구가 마음의 일부로 통합될 수 있다는 4E 관점은?",
    "choices": [
      "구현된 인지",
      "행화적 인지",
      "철학적 행동주의",
      "체화된 인지",
      "확장된 인지"
    ],
    "answer": 4,
    "explanation": "도구·기술·기억 저장 장치가 인지 체계의 일부가 될 수 있다.",
    "choiceExplanations": [
      "자료의 embedded cognition으로, 물리적·사회적 환경에 최적화된 인지 과정이다.",
      "능동적 행위와 상호작용을 통해 의미가 생성된다고 본다.",
      "심적 상태를 일정 상황에서의 행동 성향으로 설명한다.",
      "신체 구조와 감각·운동 체계가 인지 형성에 기여한다.",
      "도구·기술·기억 저장 장치가 인지 체계의 일부가 될 수 있다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-6-1-03",
    "week": 6,
    "keyword": "6-1",
    "question": "물리적·사회적 환경에 최적화된 인지 과정을 뜻하는 것은?",
    "choices": [
      "행화적 인지",
      "철학적 행동주의",
      "체화된 인지",
      "확장된 인지",
      "구현된 인지"
    ],
    "answer": 4,
    "explanation": "자료의 embedded cognition으로, 물리적·사회적 환경에 최적화된 인지 과정이다.",
    "choiceExplanations": [
      "능동적 행위와 상호작용을 통해 의미가 생성된다고 본다.",
      "심적 상태를 일정 상황에서의 행동 성향으로 설명한다.",
      "신체 구조와 감각·운동 체계가 인지 형성에 기여한다.",
      "도구·기술·기억 저장 장치가 인지 체계의 일부가 될 수 있다.",
      "자료의 embedded cognition으로, 물리적·사회적 환경에 최적화된 인지 과정이다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-6-1-04",
    "week": 6,
    "keyword": "6-1",
    "question": "세계와 능동적으로 상호작용하며 의미를 만든다는 관점은?",
    "choices": [
      "철학적 행동주의",
      "체화된 인지",
      "확장된 인지",
      "구현된 인지",
      "행화적 인지"
    ],
    "answer": 4,
    "explanation": "능동적 행위와 상호작용을 통해 의미가 생성된다고 본다.",
    "choiceExplanations": [
      "심적 상태를 일정 상황에서의 행동 성향으로 설명한다.",
      "신체 구조와 감각·운동 체계가 인지 형성에 기여한다.",
      "도구·기술·기억 저장 장치가 인지 체계의 일부가 될 수 있다.",
      "자료의 embedded cognition으로, 물리적·사회적 환경에 최적화된 인지 과정이다.",
      "능동적 행위와 상호작용을 통해 의미가 생성된다고 본다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-6-1-05",
    "week": 6,
    "keyword": "6-1",
    "question": "4E 인지의 공통 관점으로 맞는 것은?",
    "choices": [
      "인지가 뇌 안에만 국한되지 않음",
      "신체는 인지와 무관함",
      "환경은 언제나 단순 배경일 뿐",
      "모든 인지는 외적 행동과 무관함",
      "두개골 경계가 마음의 필수 경계임"
    ],
    "answer": 0,
    "explanation": "몸·환경·행동·상호작용이 인지 형성에 관여한다.",
    "choiceExplanations": [
      "몸·환경·행동·상호작용이 인지 형성에 관여한다.",
      "체화된 인지는 신체의 역할을 강조한다.",
      "환경의 인지적 역할을 인정한다.",
      "행화적 인지는 능동적 행위를 강조한다.",
      "확장된 인지는 그 한정에 도전한다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-6-1-06",
    "week": 6,
    "keyword": "6-1",
    "question": "자료의 번역과 영어 연결이 틀린 것은?",
    "choices": [
      "체화된 인지—embodied",
      "확장된 인지—extended",
      "구현된 인지—embedded",
      "행화적 인지—enactive",
      "행화적 인지—embedded"
    ],
    "answer": 4,
    "explanation": "행화적 인지는 enactive이다.",
    "choiceExplanations": [
      "자료의 대응이다.",
      "자료의 대응이다.",
      "이 문항은 자료의 번역을 따른다.",
      "자료의 대응이다.",
      "행화적 인지는 enactive이다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-6-1-07",
    "week": 6,
    "keyword": "6-1",
    "question": "‘뇌=컴퓨터’ 모형에 대한 반박으로 신체를 강조하는 입장은?",
    "choices": [
      "기회원인론",
      "양면 이론",
      "정보량 조건",
      "체화된 인지",
      "제한적 유형 동일론"
    ],
    "answer": 3,
    "explanation": "자료는 몸에 의해 구성되는 인지로 설명한다.",
    "choiceExplanations": [
      "신이 진정한 원인이라는 견해다.",
      "한 실체의 두 양상에 관한 견해다.",
      "신호가 내용을 구별할 양적 능력을 요구한다.",
      "자료는 몸에 의해 구성되는 인지로 설명한다.",
      "심적 유형과 물리 유형의 종별 동일성이다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-6-1-08",
    "week": 6,
    "keyword": "6-1",
    "question": "행화적 인지가 수동적 표상과 대비해 강조하는 것은?",
    "choices": [
      "단자의 사전 조화",
      "모든 두뇌 상태의 동일한 재질",
      "행위를 통한 세계의 구성",
      "몸을 배제한 기호의 보관만",
      "모든 경험의 인과적 무력함"
    ],
    "answer": 2,
    "explanation": "인지가 능동적 행위이고 상호작용에서 의미가 생성된다고 설명한다.",
    "choiceExplanations": [
      "예정조화론이다.",
      "행화적 인지의 기준이 아니다.",
      "인지가 능동적 행위이고 상호작용에서 의미가 생성된다고 설명한다.",
      "능동적 상호작용을 강조하는 설명과 다르다.",
      "부수현상론의 설명에 가깝다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-6-2-01",
    "week": 6,
    "keyword": "6-2",
    "question": "쌍둥이 지구 사고실험이 비교하는 ‘물’의 화학적 구성은?",
    "choices": [
      "양쪽 모두 화학적 구성이 동일함",
      "지구 H₂O / 쌍둥이 지구 XYZ",
      "지구 XYZ / 쌍둥이 지구 H₂O",
      "양쪽 모두 H₂O",
      "양쪽 모두 XYZ"
    ],
    "answer": 1,
    "explanation": "겉으로 유사한 액체라도 화학적 구성은 다르게 설정한다.",
    "choiceExplanations": [
      "화학적 구성의 차이가 설정의 핵심이다.",
      "겉으로 유사한 액체라도 화학적 구성은 다르게 설정한다.",
      "대응이 뒤바뀌었다.",
      "쌍둥이 지구에서는 XYZ라고 설정한다.",
      "지구에서는 H₂O이다."
    ],
    "sourcePage": 2
  },
  {
    "id": "easy-6-2-02",
    "week": 6,
    "keyword": "6-2",
    "question": "두 철수의 내부 심리 상태와 ‘물’의 외연은 각각 어떤가?",
    "choices": [
      "내부는 같고 외연은 다름",
      "내부도 외연도 반드시 같음",
      "내부가 다르므로 외연도 다름",
      "내부는 같으므로 외연은 정할 수 없음",
      "외연이 같고 단어만 다름"
    ],
    "answer": 0,
    "explanation": "같은 내부 상태에서도 각각 H₂O와 XYZ를 가리킨다.",
    "choiceExplanations": [
      "같은 내부 상태에서도 각각 H₂O와 XYZ를 가리킨다.",
      "외연은 환경의 물질에 따라 다르다.",
      "내부 상태가 같다는 설정이 핵심이다.",
      "각각의 환경에서 다른 지시체를 가진다.",
      "같은 말 ‘물’이 다른 물질을 가리키는 설정이다."
    ],
    "sourcePage": 2
  },
  {
    "id": "easy-6-2-03",
    "week": 6,
    "keyword": "6-2",
    "question": "‘의미는 머릿속에 있지 않다’가 강조하는 것은?",
    "choices": [
      "화자는 어떠한 의미도 이해하지 못함",
      "단어는 의미를 전혀 갖지 못함",
      "같은 철자면 외연은 반드시 같음",
      "의미는 오직 개인의 느낌임",
      "화자의 내부 상태만으로 의미가 정해지지 않음"
    ],
    "answer": 4,
    "explanation": "외부 세계의 자연종과의 관계도 중요하다는 논변이다.",
    "choiceExplanations": [
      "중국어방의 이해 부재 주장과 다르다.",
      "의미의 부재가 아니라 결정 요인을 다룬다.",
      "같은 단어의 다른 외연을 제시한다.",
      "퍼트남이 비판하는 내부 한정과 같다.",
      "외부 세계의 자연종과의 관계도 중요하다는 논변이다."
    ],
    "sourcePage": 2
  },
  {
    "id": "easy-6-2-04",
    "week": 6,
    "keyword": "6-2",
    "question": "자료의 내포와 외연을 연결한 것은?",
    "choices": [
      "내포—철자 / 외연—뜻",
      "내포—뜻 / 외연—내부 기분",
      "내포—신경 구조 / 외연—철자",
      "내포—뜻 / 외연—지시체",
      "내포—지시체 / 외연—뜻"
    ],
    "answer": 3,
    "explanation": "자료에 제시된 구별이다.",
    "choiceExplanations": [
      "내포는 뜻이며 외연은 지시체다.",
      "외연은 단어가 가리키는 것이다.",
      "자료의 뜻·지시체 구별과 다르다.",
      "자료에 제시된 구별이다.",
      "순서가 뒤바뀌었다."
    ],
    "sourcePage": 2
  },
  {
    "id": "easy-6-2-05",
    "week": 6,
    "keyword": "6-2",
    "question": "쌍둥이 지구 논변에서 ‘물’의 의미를 결정하는 외부 요인은?",
    "choices": [
      "문장의 출력 속도",
      "개인의 모든 물리 지식량만",
      "그 말이 인과적으로 연결된 자연종",
      "단어의 글자 수만",
      "화자의 같은 내부 느낌만"
    ],
    "answer": 2,
    "explanation": "자료는 이를 자연종 외재론으로 소개한다.",
    "choiceExplanations": [
      "출력 속도에 관한 논변이 아니다.",
      "환경의 물질적 차이가 핵심이다.",
      "자료는 이를 자연종 외재론으로 소개한다.",
      "철자나 글자 수만으로 의미를 결정하지 않는다.",
      "그것만으로는 외연의 차이를 설명할 수 없다."
    ],
    "sourcePage": 2
  },
  {
    "id": "easy-6-3-01",
    "week": 6,
    "keyword": "6-3",
    "question": "적극적 외재론에서 적극적이라고 부르는 것은 무엇의 역할인가?",
    "choices": [
      "개인의 의식만",
      "인지 과정을 이끄는 환경의 역할",
      "신이 매번 수행하는 개입",
      "감각질의 부수적 역할",
      "단자의 과거 창조만"
    ],
    "answer": 1,
    "explanation": "클라크와 차머스가 환경의 현재적 기여를 강조한다.",
    "choiceExplanations": [
      "모든 인지를 의식으로 제한하지 않는다.",
      "클라크와 차머스가 환경의 현재적 기여를 강조한다.",
      "기회원인론의 설명이다.",
      "부수현상론과 다른 논의이다.",
      "예정조화론의 설명이다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-6-3-02",
    "week": 6,
    "keyword": "6-3",
    "question": "표준 외재론과 적극적 외재론의 대비로 맞는 것은?",
    "choices": [
      "역사적·수동적 외부 특성과 현재의 능동적 인과 역할",
      "현재 역할과 현재 역할의 완전 부정",
      "둘 다 두개골 밖은 무조건 배제",
      "둘 다 의미는 내부 상태로만 결정",
      "둘 다 비물리 실체를 필수로 요구"
    ],
    "answer": 0,
    "explanation": "적극적 외재론은 지금 여기의 결합과 행동 기여를 강조한다.",
    "choiceExplanations": [
      "적극적 외재론은 지금 여기의 결합과 행동 기여를 강조한다.",
      "적극적 외재론은 현재의 외부 기여를 부정하지 않는다.",
      "적극적 외재론의 취지와 반대다.",
      "표준 의미 외재론 역시 내부 상태만으로 한정하지 않는다.",
      "자료의 두 외재론을 이렇게 구별하지 않는다."
    ],
    "sourcePage": 2
  },
  {
    "id": "easy-6-3-03",
    "week": 6,
    "keyword": "6-3",
    "question": "결합된 인지 체계에서 유기체와 외부 개체의 상호작용은?",
    "choices": [
      "외부는 항상 아무 영향도 주지 않음",
      "뇌에서 밖으로만 향함",
      "외부에서 뇌로만 향함",
      "어떤 인과관계도 없음",
      "양방향이며 함께 행동을 지배함"
    ],
    "answer": 4,
    "explanation": "각 구성요소가 적극적 인과 역할을 하는 하나의 체계이다.",
    "choiceExplanations": [
      "외부의 인과 기여를 인정한다.",
      "자료는 양방향 상호작용을 말한다.",
      "단순 일방향 입력으로만 제한하지 않는다.",
      "인과적 결합이 핵심이다.",
      "각 구성요소가 적극적 인과 역할을 하는 하나의 체계이다."
    ],
    "sourcePage": 2
  },
  {
    "id": "easy-6-3-04",
    "week": 6,
    "keyword": "6-3",
    "question": "외부 구성요소를 제거해 능력이 떨어진다는 예는 무엇을 뒷받침하는가?",
    "choices": [
      "모든 외부 물건은 무조건 인지임",
      "모든 인지는 반드시 의식적임",
      "인지에는 인과관계가 없음",
      "외부 요소도 결합 체계의 실제 기능을 맡을 수 있음",
      "외부 요소는 장식일 뿐임"
    ],
    "answer": 3,
    "explanation": "뇌 일부를 제거한 것처럼 행동능력이 떨어질 수 있다고 한다.",
    "choiceExplanations": [
      "기능적 결합 여부가 중요하다.",
      "자료는 비의식적 인지 과정도 인정한다.",
      "적극적 인과 역할을 강조한다.",
      "뇌 일부를 제거한 것처럼 행동능력이 떨어질 수 있다고 한다.",
      "제거 시 능력 저하와 맞지 않는다."
    ],
    "sourcePage": 2
  },
  {
    "id": "easy-6-3-05",
    "week": 6,
    "keyword": "6-3",
    "question": "스크래블 패를 손으로 재배열하는 것에 대한 클라크·차머스의 해석은?",
    "choices": [
      "신경 형태의 동일성 증명",
      "정보가 거짓이면 전달된다는 예",
      "단어 선택을 하는 확장된 사고의 일부",
      "사고와 전혀 무관한 행동",
      "모든 의미가 머리 안에만 있다는 증명"
    ],
    "answer": 2,
    "explanation": "외부 조작을 단순 투입·산출로만 보면 설명이 복잡해진다고 한다.",
    "choiceExplanations": [
      "같은 재질·해부 구조를 입증하는 사례가 아니다.",
      "진리 조건과 다른 논의다.",
      "외부 조작을 단순 투입·산출로만 보면 설명이 복잡해진다고 한다.",
      "외부 조작이 사고에 기여한다는 사례다.",
      "외부 환경의 적극적 역할을 강조한다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-6-3-06",
    "week": 6,
    "keyword": "6-3",
    "question": "휴대가능성 반론에서 얻는 진정한 교훈으로 제시된 것은?",
    "choices": [
      "모든 연결은 일시적일수록 좋음",
      "인지 자원과 신뢰할 수 있는 결합이 필요함",
      "외부 자원은 무조건 배제해야 함",
      "외부 자원은 반드시 매번 분실되어야 함",
      "생물학적 뇌는 손상될 수 없음"
    ],
    "answer": 1,
    "explanation": "필요할 때 이용할 수 있는 외부 자원도 가능하다고 본다.",
    "choiceExplanations": [
      "안정적 접근과 신뢰성이 중요하다.",
      "필요할 때 이용할 수 있는 외부 자원도 가능하다고 본다.",
      "계산기·수첩의 신뢰할 만한 결합을 인정한다.",
      "분실 위험은 체계를 반박하는 결정적 기준이 아니다.",
      "뇌도 손상과 기능 부전의 위험이 있다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-6-3-07",
    "week": 6,
    "keyword": "6-3",
    "question": "인식론적 행위와 실용적 행위의 구별이 맞는 것은?",
    "choices": [
      "인식론적: 인지를 돕는 환경 변화 / 실용적: 변화 자체가 목표",
      "인식론적: 변화 자체만 목표 / 실용적: 인지만 도움",
      "둘 다 세계를 전혀 바꾸지 않음",
      "둘 다 오직 두개골 안의 작동",
      "인식론적 행위는 인지와 무관"
    ],
    "answer": 0,
    "explanation": "자료의 두 행위 구별이다.",
    "choiceExplanations": [
      "자료의 두 행위 구별이다.",
      "구별이 뒤바뀌었다.",
      "두 행위 모두 세계 변화와 관련된다.",
      "외부 세계를 바꾸는 행위를 다룬다.",
      "인지과정을 보조·강화하려는 행위이다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-6-4-01",
    "week": 6,
    "keyword": "6-4",
    "question": "동등성 원리는 외부 과정의 인지적 지위를 무엇으로 판단하는가?",
    "choices": [
      "항상 뇌와 같은 재질인지",
      "두개골 밖이면 무조건 비인지인지",
      "누가 소유하는지만",
      "외부 물건이 비싼지",
      "머릿속에서라면 인지로 볼 역할을 하는지"
    ],
    "answer": 4,
    "explanation": "위치의 차이만으로 인지에서 제외하지 않는다.",
    "choiceExplanations": [
      "재질의 동일성을 요구하는 원리가 아니다.",
      "그런 경계를 문제 삼는다.",
      "소유만이 동등성 원리의 기준이 아니다.",
      "기능적 역할과 무관한 기준이다.",
      "위치의 차이만으로 인지에서 제외하지 않는다."
    ],
    "sourcePage": 2
  },
  {
    "id": "easy-6-4-02",
    "week": 6,
    "keyword": "6-4",
    "question": "잉가와 달리 오토가 장소 정보를 확인하는 자원은?",
    "choices": [
      "오직 내부 기억",
      "중국어 규칙서",
      "수은온도계",
      "항상 지니는 노트",
      "일시적으로 처음 빌린 낯선 메모"
    ],
    "answer": 3,
    "explanation": "알츠하이머병을 앓는 오토는 노트에 적고 필요할 때 확인한다.",
    "choiceExplanations": [
      "잉가가 내부 기억을 떠올리는 사례와 구별된다.",
      "중국어방의 도구다.",
      "드레츠키 정보 사례다.",
      "알츠하이머병을 앓는 오토는 노트에 적고 필요할 때 확인한다.",
      "지속적으로 지니는 노트라는 설정과 다르다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-6-4-03",
    "week": 6,
    "keyword": "6-4",
    "question": "잉가와 오토가 찾아가는 장소는?",
    "choices": [
      "에펠탑",
      "흑백방",
      "현대미술관",
      "햄버거 음식점",
      "시계방"
    ],
    "answer": 2,
    "explanation": "두 사람 모두 53번 거리의 현대미술관에 가려는 사례다.",
    "choiceExplanations": [
      "동일한 믿음의 저장 방식 비판에 등장한다.",
      "메리 사고실험의 장소다.",
      "두 사람 모두 53번 거리의 현대미술관에 가려는 사례다.",
      "섄크의 이야기 이해 예다.",
      "기회원인론의 비유에 등장한다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-6-4-04",
    "week": 6,
    "keyword": "6-4",
    "question": "오토가 노트를 보기 전에도 해당 믿음을 가졌다고 보는 이유는?",
    "choices": [
      "모든 종이가 무조건 마음이기 때문",
      "노트가 잉가의 기억과 같은 역할을 하기 때문",
      "오토의 노트가 생물학적 뇌이기 때문",
      "노트를 볼 때만 모든 믿음이 존재하기 때문",
      "노트의 모든 내용이 오토에게 낯설기 때문"
    ],
    "answer": 1,
    "explanation": "기억에서 꺼내기 전의 믿음도 인정한다면 노트의 역할도 같게 보자는 논증이다.",
    "choiceExplanations": [
      "어떤 역할로 결합되는지가 중요하다.",
      "기억에서 꺼내기 전의 믿음도 인정한다면 노트의 역할도 같게 보자는 논증이다.",
      "재질은 뇌와 다르지만 역할을 비교한다.",
      "현시적 믿음만 인정하는 제한을 피하려는 논증이다.",
      "안정적으로 기록·접근하는 자원이라는 설정이다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-6-4-05",
    "week": 6,
    "keyword": "6-4",
    "question": "노트와 내부 기억의 차이에 대해 클라크·차머스가 주장한 것은?",
    "choices": [
      "접근성·안정성의 차이는 얕은 차이",
      "재질 차이만으로 노트는 절대 믿음이 아님",
      "기억은 꺼내기 전까지 믿음일 수 없음",
      "오토는 어떤 믿음도 가질 수 없음",
      "두 사람이 믿는 장소는 반드시 다름"
    ],
    "answer": 0,
    "explanation": "같은 역할을 하는 두 자원을 근본적으로 다르게 보지 말자고 한다.",
    "choiceExplanations": [
      "같은 역할을 하는 두 자원을 근본적으로 다르게 보지 말자고 한다.",
      "위치·재질보다 역할을 기준으로 본다.",
      "그렇게 제한하면 현시적 믿음만 남는다고 지적한다.",
      "오토도 확인 전부터 해당 믿음을 가진다고 본다.",
      "같은 현대미술관 위치 정보를 다룬다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-7-1-01",
    "week": 7,
    "keyword": "7-1",
    "question": "슈뢰딩거가 유전 기작을 설명할 때 든 부호의 비유는?",
    "choices": [
      "중국어방의 영어 규칙서만",
      "오토의 위치 노트만",
      "번개와 전기 방전",
      "신의 두 시계",
      "모스 부호"
    ],
    "answer": 4,
    "explanation": "물리적 구조만이 아니라 코드-스크립트 관계를 제안한다.",
    "choiceExplanations": [
      "중국어방의 도구와 다르다.",
      "확장된 마음의 예다.",
      "동일론의 과학적 동일성 예다.",
      "예정조화론의 비유이다.",
      "물리적 구조만이 아니라 코드-스크립트 관계를 제안한다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-7-1-02",
    "week": 7,
    "keyword": "7-1",
    "question": "슈뢰딩거가 단순한 물리 구조 설명에 제기한 문제는?",
    "choices": [
      "정보는 반드시 거짓이어야 한다.",
      "생명 현상은 어떤 방식으로도 표현할 수 없다.",
      "모든 유전자 서열이 같은 내용이다.",
      "작은 분자들로 다양한 생명 현상을 어떻게 표현하는가",
      "분자는 어떤 기능도 가질 수 없다."
    ],
    "answer": 3,
    "explanation": "많은 경우의 수를 주는 코드 관계를 제안한다.",
    "choiceExplanations": [
      "정보의 진리 조건을 다루는 주장이 아니다.",
      "코드 관계를 통해 다양성을 설명할 가능성을 제안한다.",
      "다양한 기능·형태를 표현하는 코드 관계를 강조한다.",
      "많은 경우의 수를 주는 코드 관계를 제안한다.",
      "물리적 기능 자체를 모두 부정하는 주장이 아니다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-7-1-03",
    "week": 7,
    "keyword": "7-1",
    "question": "코드-스크립트 관계의 장점으로 자료가 든 것은?",
    "choices": [
      "기호 하나마다 오직 한 생명체만 가능",
      "분자의 모든 물리적 성질이 사라짐",
      "조합 가능한 경우의 수가 매우 많음",
      "모든 기능을 오직 한 배열에 고정",
      "정보와 기능 사이의 모든 관계를 제거"
    ],
    "answer": 2,
    "explanation": "한정된 기호의 조합으로 다양한 기능과 형태를 표현할 수 있다.",
    "choiceExplanations": [
      "그런 제한을 제시하지 않는다.",
      "코드 관계를 인정해도 물리적 성질의 부재를 뜻하지 않는다.",
      "한정된 기호의 조합으로 다양한 기능과 형태를 표현할 수 있다.",
      "다양한 경우의 수를 강조하는 설명과 반대다.",
      "코드를 통해 다양한 기능을 설명하려 한다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-7-1-04",
    "week": 7,
    "keyword": "7-1",
    "question": "자료에서 분자구조주의가 기능을 결정한다고 본 것은?",
    "choices": [
      "컴퓨터의 출력 정답률만",
      "분자의 구조",
      "화자의 내부 심리만",
      "고통 행동 성향",
      "신의 매번 개입"
    ],
    "answer": 1,
    "explanation": "유전 정보의 내용을 분자 수준의 구조에 의존시킨다.",
    "choiceExplanations": [
      "튜링 테스트와 다른 논의다.",
      "유전 정보의 내용을 분자 수준의 구조에 의존시킨다.",
      "의미 외재론의 쟁점과 다르다.",
      "행동주의의 설명이다.",
      "기회원인론의 설명이다."
    ],
    "sourcePage": 1
  },
  {
    "id": "easy-7-2-01",
    "week": 7,
    "keyword": "7-2",
    "question": "섀넌의 정량적 이론에서 정보가 줄이는 것은?",
    "choices": [
      "불확실성",
      "특정 신호의 의미만",
      "가능한 상태의 이름",
      "신호에 쓰이는 기호의 종류만",
      "신호의 발생 확률을 언제나 1로 고정"
    ],
    "answer": 0,
    "explanation": "실현 가능한 상태의 범위를 좁혀 준다.",
    "choiceExplanations": [
      "실현 가능한 상태의 범위를 좁혀 준다.",
      "정량적 이론은 의미 자체를 결정하지 못한다.",
      "이름을 줄이는 것이 아니라 가능한 상태의 범위를 좁힌다.",
      "기호 종류의 수만 줄이는 것이 아니라 불확실성을 줄인다.",
      "주어진 상황의 불확실성을 줄이는 것이지 모든 신호를 확률 1로 만든다는 뜻은 아니다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-7-2-02",
    "week": 7,
    "keyword": "7-2",
    "question": "단순 증폭으로 장거리 신호 전달을 개선하기 어려웠던 이유는?",
    "choices": [
      "원래 신호만 사라지고 노이즈는 줄어듦",
      "노이즈가 증폭될수록 완전히 사라짐",
      "증폭하면 모든 경우의 수가 하나가 됨",
      "숫자 0과 1의 사용이 원리상 금지됨",
      "노이즈까지 함께 커짐"
    ],
    "answer": 4,
    "explanation": "증폭된 노이즈가 원래 신호를 덮는 문제가 있었다.",
    "choiceExplanations": [
      "자료는 신호와 노이즈가 함께 증폭됨을 지적한다.",
      "증폭은 노이즈 제거와 다르다.",
      "단순 증폭은 내용의 확정을 보장하지 않는다.",
      "자료는 오히려 디지털 방식을 대안으로 제시한다.",
      "증폭된 노이즈가 원래 신호를 덮는 문제가 있었다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-7-2-03",
    "week": 7,
    "keyword": "7-2",
    "question": "0이 노이즈로 0.1이 된 사례의 해결 원리는?",
    "choices": [
      "신호를 계속 무조건 크게 함",
      "기호의 생김새를 모두 버림",
      "외부 신호를 받지 않음",
      "기준 범위의 값을 0으로 재구성",
      "0.1을 항상 새 의미의 신호로 취급"
    ],
    "answer": 3,
    "explanation": "디지털 신호를 기준에 따라 복원하기 쉽다는 예다.",
    "choiceExplanations": [
      "단순 증폭은 노이즈도 키운다.",
      "이진값의 구별 기준을 활용한다.",
      "전달 중 변질된 신호를 복원하는 사례다.",
      "디지털 신호를 기준에 따라 복원하기 쉽다는 예다.",
      "자료는 본래 값 0으로의 복원을 예로 든다."
    ],
    "sourcePage": 3
  },
  {
    "id": "easy-7-2-04",
    "week": 7,
    "keyword": "7-2",
    "question": "여덟 후보를 이진 코드로 구별할 때 필요한 최소 자릿수는?",
    "choices": [
      "7자리",
      "8자리",
      "3자리",
      "1자리",
      "2자리"
    ],
    "answer": 2,
    "explanation": "세 번의 이진 선택으로 여덟 경우를 구별한다.",
    "choiceExplanations": [
      "여덟 후보에 필요한 최소보다 많다.",
      "최소 자릿수는 3이다.",
      "세 번의 이진 선택으로 여덟 경우를 구별한다.",
      "두 경우만 구별하므로 모자란다.",
      "네 경우만 구별하므로 모자란다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-7-2-05",
    "week": 7,
    "keyword": "7-2",
    "question": "같은 맥락에서 발생 확률이 더 낮은 사건의 신호는?",
    "choices": [
      "반드시 거짓",
      "더 큰 정보량을 가짐",
      "더 작은 정보량을 가짐",
      "항상 같은 정보량",
      "어떤 내용도 가질 수 없음"
    ],
    "answer": 1,
    "explanation": "자료는 드문 사건을 알리는 신호의 정보량이 더 크다고 설명한다.",
    "choiceExplanations": [
      "드묾과 거짓은 다른 개념이다.",
      "자료는 드문 사건을 알리는 신호의 정보량이 더 크다고 설명한다.",
      "확률과 정보량의 관계가 반대다.",
      "확률 차이가 정보량 차이에 관여한다.",
      "드물다는 이유만으로 내용이 없는 것은 아니다."
    ],
    "sourcePage": 5
  },
  {
    "id": "easy-7-2-06",
    "week": 7,
    "keyword": "7-2",
    "question": "한국과 외국에서 ‘이씨’ 신호의 정보량이 다른 예의 요지는?",
    "choices": [
      "정보량은 발생 확률이라는 맥락에 달림",
      "신호의 철자가 다르므로",
      "정보량은 뜻만으로 항상 고정",
      "정보는 물리적 신호일 수 없음",
      "희귀할수록 반드시 거짓"
    ],
    "answer": 0,
    "explanation": "같은 신호라도 맥락의 확률이 다르면 정보량이 달라질 수 있다.",
    "choiceExplanations": [
      "같은 신호라도 맥락의 확률이 다르면 정보량이 달라질 수 있다.",
      "같은 신호의 맥락 차이를 다룬다.",
      "자료는 맥락에 따른 변화를 강조한다.",
      "신호의 정보량을 다루는 예다.",
      "낮은 확률과 거짓을 혼동하면 안 된다."
    ],
    "sourcePage": 5
  },
  {
    "id": "easy-7-2-07",
    "week": 7,
    "keyword": "7-2",
    "question": "섀넌 이론이 유전자 정보에서 충분히 포착하지 못하는 측면은?",
    "choices": [
      "정보의 정량적 크기",
      "가능성의 감소",
      "비트에 의한 표현",
      "흔함과 드묾의 정보량 차이",
      "기능과 의미의 내용"
    ],
    "answer": 4,
    "explanation": "양을 계산하는 것만으로 어떤 결과를 뜻하는지는 결정되지 않는다.",
    "choiceExplanations": [
      "정량화가 섀넌 이론의 핵심이다.",
      "불확실성 감소를 다룬다.",
      "이진 비트 표현을 활용한다.",
      "확률에 따른 차이를 설명한다.",
      "양을 계산하는 것만으로 어떤 결과를 뜻하는지는 결정되지 않는다."
    ],
    "sourcePage": 5
  },
  {
    "id": "easy-7-3-01",
    "week": 7,
    "keyword": "7-3",
    "question": "자료의 등가 경우의 수 계산에서 8개를 1개로 좁힐 정보량은?",
    "choices": [
      "log₂8=8비트",
      "2³=3비트",
      "−log₂8=−3비트",
      "log₂8=3비트",
      "8−1=7비트"
    ],
    "answer": 3,
    "explanation": "자료의 여덟 후보 예에서 정보량은 3비트이다.",
    "choiceExplanations": [
      "log₂8은 3이다.",
      "2³은 8이며 정보량 계산은 log₂8이다.",
      "자료의 식은 log₂X로 양수다.",
      "자료의 여덟 후보 예에서 정보량은 3비트이다.",
      "단순 차이 방식 대신 로그·비트 방식을 채택한다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-7-3-02",
    "week": 7,
    "keyword": "7-3",
    "question": "자료의 H(X)=log₂X에서 X의 의미는?",
    "choices": [
      "감각질의 강도",
      "단어의 의미",
      "가능한 경우의 수",
      "그 자체가 비트 수",
      "신호의 진리값"
    ],
    "answer": 2,
    "explanation": "이 문항은 자료가 제시한 경우의 수 계산 설정을 따른다.",
    "choiceExplanations": [
      "감각 경험의 세기가 아니다.",
      "로그 계산이 의미를 결정하지는 않는다.",
      "이 문항은 자료가 제시한 경우의 수 계산 설정을 따른다.",
      "비트 정보량은 H(X)로 표현한다.",
      "참·거짓 값과 경우의 수는 다르다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-7-3-03",
    "week": 7,
    "keyword": "7-3",
    "question": "경우의 수 X에 대한 자료의 식 log₂X와 같은 것은?",
    "choices": [
      "log₁₀X",
      "−log₂(1/X)",
      "log₂(1/X)",
      "−log₂X",
      "2^X"
    ],
    "answer": 1,
    "explanation": "로그의 역수 성질에 따라 같은 값이다.",
    "choiceExplanations": [
      "로그의 밑이 달라 비트 단위의 값과 다르다.",
      "로그의 역수 성질에 따라 같은 값이다.",
      "음수 부호가 없어 부호가 반대이다.",
      "X가 1보다 크면 자료와 부호가 반대이다.",
      "지수 함수이며 자료의 로그식과 다르다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-7-3-04",
    "week": 7,
    "keyword": "7-3",
    "question": "로그의 밑을 2로 쓰는 것이 연결되는 코드 방식은?",
    "choices": [
      "이진법",
      "삼진법",
      "사진법",
      "십진법",
      "연속적 크기만 사용"
    ],
    "answer": 0,
    "explanation": "0과 1이라는 두 기호를 사용하는 비트 방식이다.",
    "choiceExplanations": [
      "0과 1이라는 두 기호를 사용하는 비트 방식이다.",
      "세 기호 방식이며 밑 2와 다르다.",
      "네 기호 방식이며 밑 2와 다르다.",
      "열 기호 방식이며 밑 2와 다르다.",
      "두 이산적 기호를 쓰는 이진 방식과 다르다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-7-3-05",
    "week": 7,
    "keyword": "7-3",
    "question": "H(X∣Y)에서 조건으로 주어진 것은?",
    "choices": [
      "X",
      "X와 Y의 차이값",
      "항상 0",
      "로그의 밑",
      "Y"
    ],
    "answer": 4,
    "explanation": "Y를 알고 난 뒤 X에 남은 불확실성에 해당한다.",
    "choiceExplanations": [
      "X가 아니라 Y가 조건이며 X의 남은 불확실성을 다룬다.",
      "차이값을 조건으로 표시한 것이 아니다.",
      "조건이 항상 0이라는 뜻이 아니다.",
      "로그의 밑 2와 조건 Y는 다르다.",
      "Y를 알고 난 뒤 X에 남은 불확실성에 해당한다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-7-3-06",
    "week": 7,
    "keyword": "7-3",
    "question": "Y가 X에 대해 제공하는 정보량의 계산 순서는?",
    "choices": [
      "이후에서 이전을 뺌",
      "두 불확실성을 곱함",
      "두 불확실성을 나눔",
      "이전 불확실성에서 Y 이후 남은 불확실성을 뺌",
      "이전과 이후의 불확실성을 더함"
    ],
    "answer": 3,
    "explanation": "I(X;Y)=H(X)−H(X∣Y)이다.",
    "choiceExplanations": [
      "자료의 뺄셈 순서가 반대다.",
      "곱셈이 아니라 차이를 사용한다.",
      "비율이 아니라 차이를 사용한다.",
      "I(X;Y)=H(X)−H(X∣Y)이다.",
      "합이 아니라 감소한 양을 구한다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-7-3-07",
    "week": 7,
    "keyword": "7-3",
    "question": "자료에서 로그 표현을 쓰는 이유에 해당하지 않는 것은?",
    "choices": [
      "공학적 척도와의 실용성",
      "큰 값의 간결한 표시",
      "신호의 구체적 의미를 자동으로 결정함",
      "큰 수를 다루기 편리함",
      "정보의 추가를 덧셈으로 표현함"
    ],
    "answer": 2,
    "explanation": "로그는 정보량을 표현하며 의미 내용의 결정은 별도 문제다.",
    "choiceExplanations": [
      "시간·주파수 등의 척도와 관련된 실용성을 든다.",
      "로그의 수학적 편의성에 해당한다.",
      "로그는 정보량을 표현하며 의미 내용의 결정은 별도 문제다.",
      "수학적 편의성으로 제시된다.",
      "정보 추가에 대한 직관에 부합한다고 한다."
    ],
    "sourcePage": 4
  },
  {
    "id": "easy-7-4-01",
    "week": 7,
    "keyword": "7-4",
    "question": "나이테 20개가 나무의 20년을 뜻한다는 예는 무엇에 관한 것인가?",
    "choices": [
      "인공 피부의 모양",
      "신호의 의미론적 내용",
      "신호의 색깔 전도",
      "단자의 직접 작용",
      "행동 성향으로서의 고통"
    ],
    "answer": 1,
    "explanation": "얼마나 많은가뿐 아니라 무엇을 말하는가를 묻는다.",
    "choiceExplanations": [
      "튜링 테스트의 신체 조건과 다르다.",
      "얼마나 많은가뿐 아니라 무엇을 말하는가를 묻는다.",
      "감각질 사고실험이 아니다.",
      "예정조화론의 논의가 아니다.",
      "행동주의의 논의가 아니다."
    ],
    "sourcePage": 6
  },
  {
    "id": "easy-7-4-02",
    "week": 7,
    "keyword": "7-4",
    "question": "수은온도계의 수은 상승이 자료에서 뜻하는 내용은?",
    "choices": [
      "온도계가 놓인 곳의 기온 상승",
      "신호가 항상 거짓임",
      "물리적 고장만",
      "마음이 신체를 움직임",
      "모든 유전자의 같은 정보량"
    ],
    "answer": 0,
    "explanation": "특정 신호가 특정 내용을 의미하는 예다.",
    "choiceExplanations": [
      "특정 신호가 특정 내용을 의미하는 예다.",
      "자료는 정상적인 온도 전달 예로 든다.",
      "정상적 인과 연결을 설명하는 예다.",
      "심신 상호작용의 예가 아니다.",
      "유전자 서열의 양적 비교와 다르다."
    ],
    "sourcePage": 6
  },
  {
    "id": "easy-7-4-03",
    "week": 7,
    "keyword": "7-4",
    "question": "세 번의 짧은 노크가 친한 친구의 도착을 뜻하는 예의 논점은?",
    "choices": [
      "노크의 길이가 곧 의미 전체임",
      "모든 노크는 반드시 같은 친구임",
      "소리가 있으면 이해도 반드시 있음",
      "노크는 인과관계가 없을수록 정보를 잘 전함",
      "신호가 어떤 특정 내용을 의미함"
    ],
    "answer": 4,
    "explanation": "나이테·온도계와 함께 의미론적 속성의 예로 제시된다.",
    "choiceExplanations": [
      "신호의 물리적 양만으로 내용을 정하지 않는다.",
      "자료의 특정 신호-내용 예를 보편적 필연으로 확대하면 안 된다.",
      "중국어방이 비판한 충분조건과 구별해야 한다.",
      "드레츠키는 특정한 연결을 중시한다.",
      "나이테·온도계와 함께 의미론적 속성의 예로 제시된다."
    ],
    "sourcePage": 6
  },
  {
    "id": "easy-7-4-04",
    "week": 7,
    "keyword": "7-4",
    "question": "섀넌과 드레츠키의 관심을 연결한 것은?",
    "choices": [
      "섀넌—의미만 / 드레츠키—양만",
      "둘 다 어떤 내용을 전하는지와 무관",
      "둘 다 정보량은 계산 불가능하다고 봄",
      "섀넌—정량적 성질 / 드레츠키—의미론적 확장",
      "섀넌—감각질 / 드레츠키—행동 성향"
    ],
    "answer": 3,
    "explanation": "드레츠키는 섀넌이 배제한 의미론적 측면을 다룬다.",
    "choiceExplanations": [
      "관심의 대비가 뒤바뀌었다.",
      "드레츠키는 바로 내용을 설명하려 한다.",
      "정량화 자체를 부정하지 않는다.",
      "드레츠키는 섀넌이 배제한 의미론적 측면을 다룬다.",
      "두 이론의 관심과 다르다."
    ],
    "sourcePage": 6
  },
  {
    "id": "easy-7-5-01",
    "week": 7,
    "keyword": "7-5",
    "question": "정보량 조건 A와 진리 조건 B의 논리적 지위는?",
    "choices": [
      "둘은 어느 쪽도 필요하지 않다.",
      "두 조건은 같은 뜻이다.",
      "각각 필요하지만 함께 만족해도 충분하지 않다.",
      "각각 충분조건이다.",
      "둘을 합치면 항상 충분조건이다."
    ],
    "answer": 2,
    "explanation": "충분한 양과 참인 사실만으로 그 사실의 전달이 보장되지 않는다.",
    "choiceExplanations": [
      "자료는 두 조건을 필요조건으로 제시한다.",
      "정보의 양과 내용의 참됨은 독립적인 조건이다.",
      "충분한 양과 참인 사실만으로 그 사실의 전달이 보장되지 않는다.",
      "자료는 둘 다 충분조건이 아니라고 한다.",
      "결합해도 추가 연결 조건이 필요하다."
    ],
    "sourcePage": 6
  },
  {
    "id": "easy-7-5-02",
    "week": 7,
    "keyword": "7-5",
    "question": "정보량이 같은 두 신호에서 자동으로 따라오지 않는 것은?",
    "choices": [
      "신호의 양과 의미를 구별할 수 있다는 것",
      "같은 내용을 전달한다는 것",
      "정보량의 수치가 같다는 것",
      "양적 크기를 비교할 수 있다는 것",
      "같은 비트 수로 표현한 양이라는 것"
    ],
    "answer": 1,
    "explanation": "같은 비트 수로 다른 내용을 전달할 수 있다.",
    "choiceExplanations": [
      "바로 그 구별이 필요하다.",
      "같은 비트 수로 다른 내용을 전달할 수 있다.",
      "이미 문제에서 같은 정보량으로 가정했다.",
      "같은 정보량이라는 비교가 주어져 있다.",
      "정보량의 동일성을 비트 수로 말할 수 있다."
    ],
    "sourcePage": 6
  },
  {
    "id": "easy-7-5-03",
    "week": 7,
    "keyword": "7-5",
    "question": "대상이 실제로 붉다는 사실만으로 보장되지 않는 것은?",
    "choices": [
      "어떤 주어진 신호가 붉음을 전달한다는 것",
      "대상이 붉다는 것",
      "붉음이 참이라는 설정",
      "참과 전달을 구별해야 한다는 점",
      "내용의 참됨을 따질 수 있다는 점"
    ],
    "answer": 0,
    "explanation": "참인 속성과 실제 전달된 내용은 다르다.",
    "choiceExplanations": [
      "참인 속성과 실제 전달된 내용은 다르다.",
      "문제의 참인 사실로 이미 주어졌다.",
      "주어진 설정이다.",
      "자료가 강조하는 구별이다.",
      "진리 조건으로 검토할 수 있다."
    ],
    "sourcePage": 6
  },
  {
    "id": "easy-7-5-04",
    "week": 7,
    "keyword": "7-5",
    "question": "붉은 사각형의 ‘사각형’ 정보를 전달하는 사례가 보여주는 결론은?",
    "choices": [
      "사각형이라는 내용이 전달되지 않는다는 것",
      "대상은 실제로 붉지 않다는 것",
      "정보량과 의미가 동일하다는 것",
      "진리 조건만으로 의미가 모두 결정된다는 것",
      "충분한 정보량만으로 붉음의 전달은 보장되지 않는다."
    ],
    "answer": 4,
    "explanation": "모양을 전하는 신호의 양이 충분해도 색 내용을 전한다고 보장되지 않는다.",
    "choiceExplanations": [
      "문제에서는 사각형 내용을 전하는 신호라고 가정했다.",
      "대상이 붉은 사각형이라는 설정을 부정할 수 없다.",
      "같은 양으로 다른 내용을 전할 수 있다는 예다.",
      "참인 속성이 있어도 그 신호의 전달 내용인지는 별도다.",
      "모양을 전하는 신호의 양이 충분해도 색 내용을 전한다고 보장되지 않는다."
    ],
    "sourcePage": 6
  },
  {
    "id": "easy-7-5-05",
    "week": 7,
    "keyword": "7-5",
    "question": "A와 B만으로 내용 전달을 확정할 수 없는 이유는?",
    "choices": [
      "충분한 정보량은 의미와 항상 같아서",
      "참인 사실은 신호 없이 존재할 수 없어서",
      "정보량이 충분하면 진리 조건이 사라져서",
      "신호와 바로 그 사실의 연결이 더 필요해서",
      "모든 참인 명제는 같은 내용이어서"
    ],
    "answer": 3,
    "explanation": "정보량은 구분 능력, 진리 조건은 참됨을 보장할 뿐이다.",
    "choiceExplanations": [
      "자료는 정보량과 내용이 다르다고 한다.",
      "사실의 참됨과 신호 전달은 구별된다.",
      "두 조건은 독립적인 필요조건이다.",
      "정보량은 구분 능력, 진리 조건은 참됨을 보장할 뿐이다.",
      "참이 같아도 내용은 다를 수 있다."
    ],
    "sourcePage": 6
  },
  {
    "id": "easy-7-5-06",
    "week": 7,
    "keyword": "7-5",
    "question": "자료의 ‘정보량≠내용, 참≠전달된 내용’과 맞지 않는 설명은?",
    "choices": [
      "어떤 사실에 대한 신호인지 연결을 따져야 한다.",
      "양적 능력과 구체적 의미는 다르다.",
      "충분한 비트 수와 참인 사실만 있으면 그 사실이 전달된다.",
      "같은 정보량으로 다른 내용을 전할 수 있다.",
      "참인 명제라도 해당 신호가 전하지 않을 수 있다."
    ],
    "answer": 2,
    "explanation": "바로 이 자동적 결론을 부정한다.",
    "choiceExplanations": [
      "추가 조건이 필요한 이유다.",
      "A만으로 내용이 결정되지 않는다는 요지다.",
      "바로 이 자동적 결론을 부정한다.",
      "정보량과 내용의 구별이다.",
      "참과 실제 전달의 구별이다."
    ],
    "sourcePage": 6
  },
  {
    "id": "easy-7-6-01",
    "week": 7,
    "keyword": "7-6",
    "question": "드레츠키의 A 조건이 요구하는 것은?",
    "choices": [
      "무작위 신호의 우연한 적중만",
      "해당 상태를 구별할 만큼 충분한 정보량",
      "전달 내용의 실제 참됨",
      "우연이 아닌 특정한 상태와의 연결",
      "사전 지식만으로 확률 1"
    ],
    "answer": 1,
    "explanation": "양적 구분 능력의 조건이다.",
    "choiceExplanations": [
      "특정 연결 없이 우연히 맞는 것으로 충분하지 않다.",
      "양적 구분 능력의 조건이다.",
      "B인 진리 조건이다.",
      "추가 조건 C의 핵심이다.",
      "신호를 통해 새로 확정되는 조건과 다르다."
    ],
    "sourcePage": 6
  },
  {
    "id": "easy-7-6-02",
    "week": 7,
    "keyword": "7-6",
    "question": "B 조건의 이름과 요구가 맞는 것은?",
    "choices": [
      "진리 조건—s가 실제로 F임",
      "정보량 조건—내용의 참됨",
      "진리 조건—비트 수만 충분함",
      "인과 조건—신호 길이만 증가",
      "사전 지식 조건—이미 모든 것을 앎"
    ],
    "answer": 0,
    "explanation": "신호가 전달한다는 내용이 실제로 참이어야 한다.",
    "choiceExplanations": [
      "신호가 전달한다는 내용이 실제로 참이어야 한다.",
      "정보량 조건은 양적 구분 능력이다.",
      "진리 조건은 실제 참됨을 요구한다.",
      "C의 핵심은 특정한 사실과의 연결이다.",
      "이미 확정된 사실만을 뜻하지 않는다."
    ],
    "sourcePage": 6
  },
  {
    "id": "easy-7-6-03",
    "week": 7,
    "keyword": "7-6",
    "question": "무작위 숫자의 우연한 적중만으로 부족하다는 점은 어떤 요구와 연결되는가?",
    "choices": [
      "조건 A의 비트 수만",
      "조건 B의 참됨만",
      "인공 피부의 동일성",
      "감각질의 전도",
      "조건 C의 특정한 사실-신호 연결"
    ],
    "answer": 4,
    "explanation": "양과 참됨에 더해 해당 상태와 신호의 연결이 필요하다.",
    "choiceExplanations": [
      "A만으로 우연한 적중을 배제하지 못한다.",
      "우연히 맞아도 참일 수 있으므로 B만으로 부족하다.",
      "정보 전달의 조건이 아니다.",
      "정보 전달 조건과 다른 사고실험이다.",
      "양과 참됨에 더해 해당 상태와 신호의 연결이 필요하다."
    ],
    "sourcePage": 6
  },
  {
    "id": "easy-7-6-04",
    "week": 7,
    "keyword": "7-6",
    "question": "최종 정의에서 k는 무엇인가?",
    "choices": [
      "대상의 속성 F",
      "대상 s의 이름",
      "정보량의 단위 비트",
      "신호를 얻기 전에 가진 사전 지식",
      "새로 얻는 신호 자체"
    ],
    "answer": 3,
    "explanation": "k만 있을 때 해당 사실은 아직 확률 1로 확정되지 않는다.",
    "choiceExplanations": [
      "k는 속성이 아니라 사전 지식이다.",
      "s는 대상이며 k는 지식이다.",
      "k는 비트 단위의 기호가 아니다.",
      "k만 있을 때 해당 사실은 아직 확률 1로 확정되지 않는다.",
      "새 신호는 r이다."
    ],
    "sourcePage": 7
  },
  {
    "id": "easy-7-6-05",
    "week": 7,
    "keyword": "7-6",
    "question": "최종 정의에서 r은 무엇인가?",
    "choices": [
      "모든 환경의 고정 상태",
      "로그의 밑",
      "추가로 얻는 신호",
      "신호 이전의 사전 지식",
      "판정할 속성 자체"
    ],
    "answer": 2,
    "explanation": "r을 더하면 s가 F일 조건부 확률이 1이 되어야 한다.",
    "choiceExplanations": [
      "r은 추가되는 정보 신호다.",
      "로그 밑이 아니라 신호의 기호다.",
      "r을 더하면 s가 F일 조건부 확률이 1이 되어야 한다.",
      "그것은 k이다.",
      "속성은 F로 표시한다."
    ],
    "sourcePage": 7
  },
  {
    "id": "easy-7-6-06",
    "week": 7,
    "keyword": "7-6",
    "question": "r을 얻기 전의 조건으로 자료의 정의와 맞는 것은?",
    "choices": [
      "신호 이전 확률은 아무 관계가 없음",
      "P(s가 F∣k)<1",
      "P(s가 F∣k)=1",
      "P(s가 F∣k)>1",
      "P(k∣s가 F)=1만 요구"
    ],
    "answer": 1,
    "explanation": "사전 지식만으로는 해당 사실이 이미 확정되지 않아야 한다.",
    "choiceExplanations": [
      "정의는 사전 확률이 1보다 작아야 한다고 명시한다.",
      "사전 지식만으로는 해당 사실이 이미 확정되지 않아야 한다.",
      "이미 확정되어 있으면 신호의 새 정보 조건과 다르다.",
      "확률은 1을 넘을 수 없다.",
      "자료가 제시한 조건부 확률의 방향과 다르다."
    ],
    "sourcePage": 7
  },
  {
    "id": "easy-7-6-07",
    "week": 7,
    "keyword": "7-6",
    "question": "r을 얻은 후 요구하는 조건은?",
    "choices": [
      "P(s가 F∣k,r)=1",
      "P(s가 F∣k,r)<1이면 언제나 충분",
      "P(r∣s가 F)=1만 요구",
      "P(s가 F∣k,r)=0",
      "새 신호를 조건에서 제거"
    ],
    "answer": 0,
    "explanation": "추가 신호와 사전 지식으로 해당 사실이 확정되어야 한다.",
    "choiceExplanations": [
      "추가 신호와 사전 지식으로 해당 사실이 확정되어야 한다.",
      "자료의 정의는 확률 1을 요구한다.",
      "조건을 반대 방향의 확률로 바꿀 수 없다.",
      "해당 사실이 확정되는 조건과 반대다.",
      "k에 더해 r이 주어져야 한다."
    ],
    "sourcePage": 7
  },
  {
    "id": "easy-7-6-08",
    "week": 7,
    "keyword": "7-6",
    "question": "정보 전달 정의의 전후 변화를 옳게 요약한 것은?",
    "choices": [
      "사전부터 확정, 신호 후에도 확정",
      "사전에는 확정, 신호 후에는 미확정",
      "사전과 사후 모두 확률 0",
      "신호가 있어도 항상 미확정",
      "사전에는 미확정, 신호 추가 후에는 확정"
    ],
    "answer": 4,
    "explanation": "P(s가 F∣k)<1이고 P(s가 F∣k,r)=1이다.",
    "choiceExplanations": [
      "신호가 새로 불확실성을 없애는 조건이 아니다.",
      "자료 정의의 전후 방향이 반대다.",
      "해당 사실의 전달을 뜻하지 않는다.",
      "자료의 확률 1 조건에 어긋난다.",
      "P(s가 F∣k)<1이고 P(s가 F∣k,r)=1이다."
    ],
    "sourcePage": 7
  },
  {
    "id": "easy-7-6-09",
    "week": 7,
    "keyword": "7-6",
    "question": "같은 길이의 TGCCAG와 ACGGCA가 다른 내용을 가질 수 있는 이유는?",
    "choices": [
      "정보량이 같으면 의미도 무조건 같음",
      "어떤 인과관계도 없어야 함",
      "둘 다 아무 기능이 없는 소리임",
      "서로 다른 아미노산 서열과 인과적으로 연결됨",
      "문자 수가 서로 다름"
    ],
    "answer": 3,
    "explanation": "드레츠키 이론은 연결되는 결과의 차이로 내용의 차이를 설명한다.",
    "choiceExplanations": [
      "자료는 양과 내용을 구별한다.",
      "인과적 연결을 통해 내용을 설명한다.",
      "자료는 유전자 서열과 아미노산의 연결을 든다.",
      "드레츠키 이론은 연결되는 결과의 차이로 내용의 차이를 설명한다.",
      "두 예는 같은 길이 서열이다."
    ],
    "sourcePage": 7
  },
  {
    "id": "easy-7-7-01",
    "week": 7,
    "keyword": "7-7",
    "question": "유전자 정보 내용을 고정할 때 환경 고정을 요구하는 이유는?",
    "choices": [
      "모든 정보는 반드시 거짓이어서",
      "신호가 늘 같은 문자 수여서",
      "환경 변화에 따라 표현형과 조건부 확률이 달라져서",
      "표현형은 환경과 완전히 무관해서",
      "유전자는 어떤 경우에도 발현하지 않아서"
    ],
    "answer": 2,
    "explanation": "표현형의 가소성 때문에 배경 요인의 고정이 요구된다.",
    "choiceExplanations": [
      "진리 조건을 이렇게 부정하지 않는다.",
      "서열 길이가 환경 고정의 이유는 아니다.",
      "표현형의 가소성 때문에 배경 요인의 고정이 요구된다.",
      "자료는 환경 의존성을 강조한다.",
      "발현 결과와 환경의 관계를 다루는 논의이다."
    ],
    "sourcePage": 7
  },
  {
    "id": "easy-7-7-02",
    "week": 7,
    "keyword": "7-7",
    "question": "자료에서 표현형의 ‘가소성’과 연결되는 설명은?",
    "choices": [
      "환경의 영향은 오직 단어 철자에 한정됨",
      "환경 변화에 따라 표현형이 달라질 수 있음",
      "어떤 환경에서도 외모가 반드시 같음",
      "유전 요인은 항상 무의미함",
      "모든 정보는 비트로 표시 불가능함"
    ],
    "answer": 1,
    "explanation": "고정된 유전자-표현형 관계를 다루기 어렵게 한다.",
    "choiceExplanations": [
      "유전자 발현의 배경을 다루는 논의이다.",
      "고정된 유전자-표현형 관계를 다루기 어렵게 한다.",
      "자료의 가소성 설명과 반대다.",
      "유전 요인의 역할 자체를 전면 부정하지 않는다.",
      "정량적 표시 자체의 불가능을 말하지 않는다."
    ],
    "sourcePage": 7
  },
  {
    "id": "easy-7-7-03",
    "week": 7,
    "keyword": "7-7",
    "question": "비-유전적 배경 요소들을 모두 고정하라는 요구의 문제점은?",
    "choices": [
      "현실에서 거의 성립하지 않는 비현실적 요구",
      "현실에서 늘 자동으로 충족됨",
      "표현형 가소성을 증명 없이 제거할 수 있음",
      "유전자 없이 모든 표현형을 설명했다는 뜻",
      "모든 단어의 의미가 내적 상태로만 결정됨"
    ],
    "answer": 0,
    "explanation": "실제 환경이 변하므로 고정된 정보 개념의 유용성이 문제된다.",
    "choiceExplanations": [
      "실제 환경이 변하므로 고정된 정보 개념의 유용성이 문제된다.",
      "자료는 충족하기 어렵다고 지적한다.",
      "가소성이 바로 고정 요구를 어렵게 하는 이유다.",
      "그런 완전한 설명을 제시한 것이 아니다.",
      "쌍둥이 지구 논변과도 다른 논점이다."
    ],
    "sourcePage": 7
  },
  {
    "id": "easy-7-7-04",
    "week": 7,
    "keyword": "7-7",
    "question": "유전적 요인을 고정하고 환경을 바꾸는 역의 사례가 시사하는 것은?",
    "choices": [
      "유전자만이 유일하게 정보를 가질 수 있음",
      "환경은 항상 아무 영향도 없음",
      "표현형은 무조건 거짓 정보임",
      "기호의 길이가 내용 전체를 결정함",
      "환경도 표현형에 관한 의미론적 정보를 가질 수 있음"
    ],
    "answer": 4,
    "explanation": "유전자에 적용한 관계를 환경에도 인정해야 한다는 지적이다.",
    "choiceExplanations": [
      "역의 사례는 그 독점을 문제 삼는다.",
      "다른 환경에서 표현형이 달라질 수 있다.",
      "환경-표현형 관계도 의미론적일 수 있다는 결론이다.",
      "양과 내용의 구별을 없애는 주장이 아니다.",
      "유전자에 적용한 관계를 환경에도 인정해야 한다는 지적이다."
    ],
    "sourcePage": 7
  },
  {
    "id": "easy-7-7-05",
    "week": 7,
    "keyword": "7-7",
    "question": "같은 유전자를 가진 쌍둥이가 다른 환경에서 자란 예의 직접적 결론은?",
    "choices": [
      "영양 상태는 외모와 무관함",
      "같은 유전자면 외모는 언제나 완전히 같음",
      "환경 정보는 어떤 경우에도 성립하지 않음",
      "각 환경이 쌍둥이 외모에 관한 내용을 지닌다고도 봐야 함",
      "외모 차이가 있으면 유전자는 반드시 다름"
    ],
    "answer": 3,
    "explanation": "드레츠키 정의를 역으로 적용한 자료의 결론이다.",
    "choiceExplanations": [
      "환경의 영양 상태가 차이를 만드는 예다.",
      "환경의 영향과 표현형 가소성을 무시한다.",
      "자료는 환경 정보 관계도 인정해야 한다고 한다.",
      "드레츠키 정의를 역으로 적용한 자료의 결론이다.",
      "같은 유전자를 가진 사례로 설정한다."
    ],
    "sourcePage": 7
  }
];
