from django.urls import path, include
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static
from .views import *

router = routers.SimpleRouter()

router.register("podcasts", PodcastViewSet, basename='podcast')
router.register("random_podcasts", RandomPodcastsViewSet, basename='random_podcast')
router.register("categories", CategoryViewSet, basename='category')
router.register("authors", AuthorViewSet, basename='author')



urlpatterns = [
    path('', include(router.urls)),
    path('podcasts/by_category/', PodcastViewSet.as_view({'get': 'by_category'})),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)