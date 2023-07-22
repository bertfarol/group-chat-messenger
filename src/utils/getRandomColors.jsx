export const getRandomColors = () => {
  const avatarColors = [
    "#AF2D2D",
    "#1c3bec",
    "#ffa000",
    "#5500e1",
    "#52d7e7",
    "#ff598c",
    "#f4a261",
    "#762575",
  ];

  const randomColorIndex = Math.floor(Math.random() * avatarColors.length);
  const randomColor = avatarColors[randomColorIndex];

  return randomColor;
};
