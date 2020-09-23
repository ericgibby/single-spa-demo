import { useMemo } from 'react';

type Zone = {
	run: <T1, T2>(fn: () => T1) => T2;
	runOutsideAngular: <T1, T2>(fn: () => T1) => T2;
};

export function useNgZone(name?: string) {
	const currentZones: Record<string, Zone> = (window as any)['NgZone'];
	return useMemo(() => {
		const zones: Record<string, Zone> = currentZones ?? {};
		let zoneName = name;
		if (!name) {
			zoneName = Object.keys(zones).shift();
		}
		return zones[zoneName || ''];
	}, [currentZones, name]);
}
