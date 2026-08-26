export interface PackageItem {
  id: string;
  name: string;
  option: string;
  people: string;
  duration: string;
  features: string[];
  price: number;
  featured?: boolean;
  badge?: string;
}

export const AUDIOVISUAL_PACKAGES: PackageItem[] = [
  {
    id: "paquete-comun",
    name: "PAQUETE COMÚN",
    option: "Opción 1",
    people: "1 persona",
    duration: "2 horas de servicio",
    features: [
      "Filmación profesional 4K",
      "Edición y corrección de color",
      "2 horas de servicio en locación"
    ],
    price: 250
  },
  {
    id: "paquete-completo",
    name: "PAQUETE COMPLETO",
    option: "Opción 2",
    people: "2 personas",
    duration: "2 a 3 horas de servicio",
    features: [
      "Filmación cinematográfica 4K",
      "Edición profesional de video",
      "Fotografía digital ilimitada",
      "2 a 3 horas de servicio en locación"
    ],
    price: 400
  },
  {
    id: "paquete-premium",
    name: "PAQUETE PREMIUM",
    option: "Opción 3",
    people: "2 a 3 personas",
    duration: "2 a 3 horas de servicio",
    featured: true,
    badge: "MÁS COMPLETO",
    features: [
      "Filmación cinematográfica 4K/8K",
      "Tomas aéreas con Drone 4K",
      "Fotografía digital ilimitada",
      "Edición cinematográfica avanzada",
      "2 a 3 horas de servicio en locación"
    ],
    price: 550
  }
];

export const handlePackageContact = (pkg: PackageItem) => {
  const message = encodeURIComponent(
    `¡Hola 4KM PRODUCCIONES! Deseo solicitar información y cotización para el *${pkg.name}* (Precio: S/ ${pkg.price}).`
  );
  window.open(`https://wa.me/51900000000?text=${message}`, "_blank");
};
