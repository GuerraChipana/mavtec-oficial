export const categories = [
  {
    id_categoria: 1,
    nombre: "Maquinaria de movimiento de tierras",
    descripcion:
      "Equipos especializados para excavación, nivelación y movimiento de grandes volúmenes de material.",
    machines: [
      {
        id_maquina: 101,
        name_machine: "Excavadora sobre oruga",
        description: "Para excavación profunda y carga de material.",
        marca: "Caterpillar",
        image: "/excavadora.png",
      },
      {
        id_maquina: 102,
        name_machine: "Retroexcavadora con cuchara",
        description: "Excavación y carga de material, trabajos mixtos.",
        marca: "Komatsu",
        image: "/retro-cuchara.avif",
      },
      {
        id_maquina: 106,
        name_machine: "Retroexcavadora con martillo neumático",
        description: "Demolición y rompimiento de superficies duras.",
        marca: "Hitachi",
        image: "/retro-martillo.png",
      },
      {
        id_maquina: 105,
        name_machine: "Tractor sobre orugas",
        description: "Empuje y nivelación de grandes volúmenes de tierra.",
        marca: "Hitachi",
        image: "/Tractor-sobre-orugas.jpeg",
      },
      {
        id_maquina: 104,
        name_machine: "Motoniveladora",
        description: "Nivelación y perfilado de terrenos y carreteras.",
        marca: "Hitachi",
        image: "/Motoniveladora.png",
      },
    ],
  },
  {
    id_categoria: 2,
    nombre: "Maquinaria de carga y transporte",
    descripcion:
      "Equipos eficientes para carga rápida y manejo de materiales en obra.",
    machines: [
      {
        id_maquina: 201,
        name_machine: "Cargador frontal",
        description:
          "Carga rápida de materiales en volquetes, tolvas o plantas.",
        marca: "CAT",
        image: "/cargador-frontal.png",
      },
      {
        id_maquina: 202,
        name_machine: "Minicargadora", // Updated machine name
        description:
          "Máquina versátil para maniobras en espacios reducidos y carga de diversos materiales.", // Updated description
        marca: "CAT",
        image: "/minicargadora.png",
      },
      {
        id_maquina: 203,
        name_machine: "Minicargadora", // Updated machine name
        description:
          "Máquina versátil para maniobras en espacios reducidos y carga de diversos materiales.", // Updated description
        marca: "VOLVO",
        image: "/volquete-volvo.png",
      },
    ],
  },
  {
    id_categoria: 3,
    nombre: "Maquinaria de compactación",
    descripcion:
      "Equipos para compactación y consolidación de suelos y pavimentos.",
    machines: [
      {
        id_maquina: 301,
        name_machine: "Rodillo compactador",
        description: "Compactación de suelos, asfalto y rellenos.",
        marca: "Bomag",
        image: "/rodillo.jpg",
      },
    ],
  },
  {
    id_categoria: 4,
    nombre: "Maquinaria de abastecimiento",
    descripcion:
      "Equipos especializados para transporte y distribución de líquidos.",
    machines: [
      {
        id_maquina: 401,
        name_machine: "Camion Cisterna",
        description: "Transporte y distribución de agua o combustible.",
        marca: "Mercedes",
        image: "/cisterna.png",
      },
    ],
  },
];
