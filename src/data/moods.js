import {
  HappyIcon,
  SadIcon,
  AngryIcon,
  CalmIcon,
  MotivatedIcon,
  AnxiousIcon,
} from "../assets/icons";

export const MOODS = [
  {
    id: "happy",
    label: "Happy",
    description: "Bright and uplifted",
    Icon: HappyIcon,
    gradient: "from-moody-300/40 to-moody-purple/30",
  },
  {
    id: "sad",
    label: "Sad",
    description: "Need comfort today",
    Icon: SadIcon,
    gradient: "from-moody-200/50 to-moody-500/25",
  },
  {
    id: "angry",
    label: "Angry",
    description: "Feeling fired up",
    Icon: AngryIcon,
    gradient: "from-moody-400/35 to-moody-700/25",
  },
  {
    id: "calm",
    label: "Calm",
    description: "Peaceful and centered",
    Icon: CalmIcon,
    gradient: "from-moody-100/60 to-moody-purple/25",
  },
  {
    id: "motivated",
    label: "Motivated",
    description: "Ready to conquer",
    Icon: MotivatedIcon,
    gradient: "from-moody-violet/30 to-moody-500/35",
  },
  {
    id: "anxious",
    label: "Anxious",
    description: "Mind racing a bit",
    Icon: AnxiousIcon,
    gradient: "from-moody-200/45 to-moody-600/30",
  },
];
