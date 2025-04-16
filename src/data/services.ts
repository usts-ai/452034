export interface Service {
  id: number;
  titre: string;
  description: string;
  points: string[];
  image: string;
}

export const services: Service[] = [
  {
    id: 1,
    titre: "Terrassement",
    description: "Préparation optimale de votre terrain pour l'installation de votre piscine en coque.",
    points: [
      "Étude de sol complète",
      "Excavation précise adaptée au modèle choisi",
      "Nivellement et stabilisation",
      "Évacuation des déblais",
      "Préparation des tranchées pour réseaux"
    ],
    image: "/images/terrassement.jpg"
  },
  {
    id: 2,
    titre: "Installation de piscine",
    description: "Pose professionnelle de votre piscine en coque avec toutes les finitions nécessaires.",
    points: [
      "Livraison et manutention sécurisée",
      "Mise en place précise avec équipement spécialisé",
      "Raccordement hydraulique complet",
      "Installation du système de filtration",
      "Mise en eau et test des équipements"
    ],
    image: "/images/installation.jpg"
  },
  {
    id: 3,
    titre: "Aménagement extérieur",
    description: "Valorisez votre espace piscine avec nos solutions d'aménagement paysager sur mesure.",
    points: [
      "Création de plages et margelles",
      "Installation de terrasses en bois ou composite",
      "Aménagement paysager et plantation",
      "Éclairage décoratif et fonctionnel",
      "Mise en place de clôtures et sécurités"
    ],
    image: "/images/amenagement.jpg"
  },
  {
    id: 4,
    titre: "Maintenance et entretien",
    description: "Des services réguliers pour garder votre piscine en parfait état toute l'année.",
    points: [
      "Nettoyage et traitement de l'eau",
      "Entretien des équipements de filtration",
      "Hivernage et mise en service saisonnière",
      "Diagnostic et réparation",
      "Contrats d'entretien personnalisés"
    ],
    image: "/images/maintenance.jpg"
  }
];
