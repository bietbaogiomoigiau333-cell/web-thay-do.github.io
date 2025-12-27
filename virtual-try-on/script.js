/* ===============================
   AVATAR
================================ */
const avatars = {
  female: "avatar/mẫu nữ.png",
  male:   "avatar/mẫu nam.png"
};

/* ===============================
   ÁO (TOP + SCALE + X)
   top   : % từ trên xuống
   scale : độ rộng (% avatar)
   x     : lệch ngang (px)
================================ */
const tops = {
  ao_chuong_do: {
    src: "clothes/tops/áo chuông đỏ.png",
    top: 10,
    scale: 74,
    x: 0
  },
  ao_hoa_nhi: {
    src: "clothes/tops/áo hoa nhí.png",
    top: 2,
    scale: 85,
    x: 0
  },
  ao_trang: {
    src: "clothes/tops/áo trắng.png",
    top: 10,
    scale: 74,
    x: 0
  },
  ao_vang: {
    src: "clothes/tops/áo vàng.png",
    top: 4,
    scale: 74,
    x: 0
  },
  ao_phong_xam: {
    src: "clothes/tops/áo phông xám.png",
    top: 4,
    scale: 100,
    x: 0
  },
  ao_khoac_xam: {
    src: "clothes/tops/áo khoác xám.png",
    top: 10,
    scale: 90,
    x: 0
  },
  ao_tam_giac: {
    src: "clothes/tops/áo tam giác.png",
    top: 10,
    scale: 74,
    x: 0
  }
};

/* ===============================
   QUẦN (TOP + SCALE + X)
================================ */
const bottoms = {
  quan_jean: {
    src: "clothes/bottoms/quần jean.png",
    top: 32,
    scale: 97,
    x: 0
  },
  quan_suong_nau: {
    src: "clothes/bottoms/quần suông nâu.png",
    top: 35,
    scale: 70,
    x: 2
  }
};

/* ===============================
   STATE
================================ */
let currentTop = null;
let currentBottom = null;

/* ===============================
   SET AVATAR
================================ */
function setAvatar(type) {
  document.getElementById("avatar").src = avatars[type];
}

/* ===============================
   TOGGLE ÁO
================================ */
function toggleTop(key) {
  const el = document.getElementById("top");
  const cfg = tops[key];

  // Tắt nếu bấm lại cùng áo
  if (currentTop === key) {
    el.style.display = "none";
    currentTop = null;
    return;
  }

  el.src = cfg.src;
  el.style.top = cfg.top + "%";
  el.style.width = cfg.scale + "%";

  // 👉 chỉnh trái / phải ở ĐÂY
  el.style.transform = `translateX(calc(-50% + ${cfg.x}px))`;

  el.style.display = "block";
  currentTop = key;
}

/* ===============================
   TOGGLE QUẦN
================================ */
function toggleBottom(key) {
  const el = document.getElementById("bottom");
  const cfg = bottoms[key];

  // Tắt nếu bấm lại cùng quần
  if (currentBottom === key) {
    el.style.display = "none";
    currentBottom = null;
    return;
  }

  el.src = cfg.src;
  el.style.top = cfg.top + "%";
  el.style.width = cfg.scale + "%";

  // 👉 chỉnh trái / phải
  el.style.transform = `translateX(calc(-50% + ${cfg.x}px))`;

  el.style.display = "block";
  currentBottom = key;
}
