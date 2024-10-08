export const handleTabNotifyCount = (count: number) => {
    return count > 99 ? '99+' : count <= 0 ? undefined : count;
}