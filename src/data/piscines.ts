export interface Piscine {
  id: number;
  nom: string;
  description: string;
  dimensions: string[];
  caracteristiques: string[];
  prix: string;
  image: string;
  populaire: boolean;
}

export const piscines: Piscine[] = [
  {
    id: 1,
    nom: "Méditerranée",
    description: "Élégante et spacieuse, cette piscine rectangulaire avec escalier roman est idéale pour les grandes familles.",
    dimensions: ["8m x 4m", "9m x 4.5m", "10m x 5m"],
    caracteristiques: ["Fond plat", "Escalier roman", "Système de filtration dernière génération"],
    prix: "À partir de 12 900€",
    image: "/images/piscine1.jpg",
    populaire: true
  },
  {
    id: 2,
    nom: "Azur",
    description: "Design moderne avec des lignes épurées, cette piscine s'intègre parfaitement dans les jardins contemporains.",
    dimensions: ["7m x 3.5m", "8m x 4m", "9m x 4.5m"],
    caracteristiques: ["Fond progressif", "Marches intégrées", "Éclairage LED inclus"],
    prix: "À partir de 11 500€",
    image: "/images/piscine2.jpg",
    populaire: false
  },
  {
    id: 3,
    nom: "Riviera",
    description: "Forme libre inspirée des piscines de luxe, pour un espace de baignade original et élégant.",
    dimensions: ["8m x 4m", "9m x 4.5m", "10m x 5m"],
    caracteristiques: ["Forme libre", "Plage immergée", "Système de nage à contre-courant en option"],
    prix: "À partir de 14 200€",
    image: "/images/piscine3.jpg",
    populaire: true
  },
  {
    id: 4,
    nom: "Petit Paradis",
    description: "Solution compacte pour les espaces réduits, sans compromis sur la qualité et l'esthétique.",
    dimensions: ["5m x 3m", "6m x 3m", "7m x 3.5m"],
    caracteristiques: ["Idéale pour petits espaces", "Installation rapide", "Faible consommation énergétique"],
    prix: "À partir de 9 900€",
    image: "/images/piscine4.jpg",
    populaire: false
  },
  {
    id: 5,
    nom: "Grand Bleu",
    description: "Notre modèle le plus spacieux, parfait pour la natation sportive et les grandes réceptions.",
    dimensions: ["10m x 5m", "12m x 6m", "15m x 7m"],
    caracteristiques: ["Profondeur ajustable", "Escalier sur toute la largeur", "Système de chauffage intégré"],
    prix: "À partir de 16 500€",
    image: "/images/piscine5.jpg",
    populaire: true
  },
  {
    id: 6,
    nom: "Lagune",
    description: "Inspirée des piscines naturelles, avec des courbes organiques et une intégration paysagère parfaite.",
    dimensions: ["8m x 4m", "9m x 5m", "11m x 6m"],
    caracteristiques: ["Forme organique", "Entrée en pente douce", "Finition aspect pierre naturelle"],
    prix: "À partir de 13 800€",
    image: "/images/piscine6.jpg",
    populaire: false
  }
];
