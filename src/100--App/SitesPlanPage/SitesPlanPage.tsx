import { useEffect, useMemo, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import GreenDots from './GreenDots'
import buildingsList from '../../assets/data/buildingsList'
import plan from '../../assets/images/1777456864065-7231d062-1073-44d2-a4d6-6d346233fa41_1_upscayl_4x_upscayl-standard-4x.png'
import { gpsToPlanPosition } from '../../Utils/gpsToPlanPosition'
import { getVisitorPlan } from '../../api/visitorPlanApi'




const normalizeSearch = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

const calibrationPoints = [
  { lat: 45.51480, lng: -74.06292, x: 41.10236, y: 83.1740 },
  { lat: 45.51472, lng: -74.06192, x: 53.3858, y: 68.8188 },
  { lat: 45.51526, lng: -74.06042, x: 61.2073, y: 35.6357 },
  { lat: 45.51554, lng: -74.06466, x: 9.3963, y: 93.9946 },
];    

const SitesPlanPage = () => {
  const { token } = useParams<{ token: string }>();
  const hasPlanToken = Boolean(token);

  const [showDots, setShowDots] = useState<Record<string, boolean>>({
    '52': false,
    '53': false,
    'E': false,
    'D': false,
    'C': false,
    'B': false,
    'A': false,
    '18': false,
    '17': false,
    '16': false,
    '14': false,
    '13': false,
    '12': false,
    '15': false,
    'Q': false,
    'P': false,
    'O': false,
    'N': false,
    'M': false,
    '11': false,
    '8': false,
    '7': false,
    '6': false,
    '5': false,
    '2': false,
    '19': false,
    '21': false,
    '22': false,
    '23': false,
    '24': false,
    '26': false,
    '25': false,
    '20': false,
    'F': false,
    'G': false,
    'H': false,
    'I': false,
    'J': false,
    'K': false,
    'L': false,
    '27': false,
    '28': false,
    '29': false,
    '30': false,
    '31': false,
    '32': false,
    '33': false,
    '34': false,
    '35': false,
    '36': false,
    '37': false,
    '38': false,
    '39': false,
    '40': false,
    '41': false,
    '42': false,
    '46': false,
    '45': false,
    '44': false,
    '51': false,
    '49': false,
    '50': false,
    'V': false,
    'U': false,
    'T': false,
    'S': false,
    'R': false,
    '48': false
  })




  const dotRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const [searchInput, setSearchInput] = useState('');
  const [pendingScrollSlug, setPendingScrollSlug] = useState<string | null>(null);
  const [userPosition, setUserPosition] = useState<{ left: number; top: number, accuracy: number } | null>(null);
  const [planAccessStatus, setPlanAccessStatus] = useState<'checking' | 'allowed' | 'denied'>(
    hasPlanToken ? 'checking' : 'denied',
  );

  
  useEffect(() => {
    if (!pendingScrollSlug || !showDots[pendingScrollSlug]) {
      return;
    }

    dotRefs.current[pendingScrollSlug]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
    setPendingScrollSlug(null);
  }, [pendingScrollSlug, showDots]);

  const handleToggleDot = (slug: string) => {
    const nextValue = !showDots[slug];

    setShowDots({ ...showDots, [slug]: nextValue });

    if (nextValue) {
      setPendingScrollSlug(slug);
    }
  };

 useEffect(() => {
  if (!token) {
    setPlanAccessStatus("denied");
    return;
  }

  let isMounted = true;

  setPlanAccessStatus("checking");

  getVisitorPlan(token)
    .then(() => {
      if (isMounted) {
        setPlanAccessStatus("allowed");
      }
    })
    .catch((error) => {
      console.error("Erreur validation du lien du plan:", error);

      if (isMounted) {
        setPlanAccessStatus("denied");
      }
    });

  return () => {
    isMounted = false;
  };
}, [token]);
 
 useEffect(() => {
  if (planAccessStatus !== 'allowed') return;

  if (!navigator.geolocation) {
    console.error("Geolocation is not supported.");
    return;
  }

  const watchId = navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude, accuracy } = position.coords;

      const dot = gpsToPlanPosition(latitude, longitude, calibrationPoints);

      setUserPosition({
        left: dot.x,
        top: dot.y,
        accuracy,
      });
    },
    (error) => {
      console.error("GPS error:", error);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 1000,
      timeout: 10000,
    }
  );

  return () => {
    navigator.geolocation.clearWatch(watchId);
  };
}, [planAccessStatus]);

  const filteredBuildings = useMemo(() => {
    const search = normalizeSearch(searchInput);

    return buildingsList.filter((building) => {
      const matchesSearch =
        search !== '' &&
        (normalizeSearch(building.slug).includes(search) || normalizeSearch(building.name).includes(search));

      return matchesSearch || showDots[building.slug];
    });
  }, [searchInput, showDots]);



const [zoomScale, setZoomScale] = useState(1);

useEffect(() => {
  const updateZoom = () => {
    setZoomScale(window.visualViewport?.scale ?? 1);
  };

  updateZoom();

  window.visualViewport?.addEventListener("resize", updateZoom);
  window.visualViewport?.addEventListener("scroll", updateZoom);

  return () => {
    window.visualViewport?.removeEventListener("resize", updateZoom);
    window.visualViewport?.removeEventListener("scroll", updateZoom);
  };
}, []);

const dotSize = Math.max(8, 24 / zoomScale);



  return (
    <article className="flex flex-col items-center gap-6 pb-10 overflow-x-hidden">
      {planAccessStatus === 'checking' && (
        <p className="text-[1.6em] font-bold text-secondary text-center">
          Validation du lien du plan...
        </p>
      )}

      {planAccessStatus === 'denied' && (
        <p className="text-[1.6em] font-bold text-secondary text-center">
          Lien du plan invalide ou expiré.
        </p>
      )}

      {planAccessStatus === 'allowed' && <section className='flex flex-col items-center'>
        <div  className='relative fade-image'>
        <img className='block w-full max-w-full' src={plan} alt="Plan aérien du 171, rang ste-Sophie" />
        {userPosition && (
  <div
    className="absolute rounded-full bg-blue-500 border-2 border-white"
    style={{
      left: `${userPosition.left}%`,
      top: `${userPosition.top}%`,
       width: `${dotSize}px`,
  height: `${dotSize}px`,
      transform: "translate(-50%, -50%)",
    }}
  />
)}
          <GreenDots showDots={showDots} dotRefs={dotRefs} />
        </div>
      </section>}
      {planAccessStatus === 'allowed' && <section className='flex flex-col items-center gap-4'>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Rechercher..."
          className='border rounded-lg py-1 px-2 text-[1.4em]'
        />
        {filteredBuildings.length > 0 ? <ul className='grid grid-cols-2 md:grid-cols-3 gap-2'>
          {filteredBuildings.map((building) => {
            return (
              <li key={building.slug} className=' w-full'>
                <button className={`px-4 py-2 w-full rounded hover:cursor-pointer ${showDots[building.slug] ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'}`} onClick={() => handleToggleDot(building.slug)}>{building.slug + ' - '}{building.name}</button>
              </li>
            )
          })}
        </ul> :
          <ul className='grid grid-cols-2 md:grid-cols-3 gap-2'>
            {buildingsList.map((building) => {
              return (
                 <li key={building.slug} className=' w-full '>
                <button className={`px-4 py-2 w-full rounded hover:cursor-pointer ${showDots[building.slug] ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'}`} onClick={() => handleToggleDot(building.slug)}>{building.slug + ' - '}{building.name}</button>
              </li>
              )
            })}
            </ul>}
      </section>}
    </article>
  )
}



export default SitesPlanPage

